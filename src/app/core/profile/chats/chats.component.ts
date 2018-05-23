import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../../../service/socket.service';
import {Chat} from '../../../models/Chat';
import {ChatService} from '../../../service/chat.service';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../../../models/Message';
import {MessageService} from '../../../service/message.service';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/User';
import {AuthService} from '../../../service/auth.service';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css', '../profile.component.css']
})
export class ChatsComponent implements OnInit, OnDestroy {

  openedChat: Chat;
  chats: Chat[] = [];
  messagesToShow: Message[] = [];
  principal: User;
  @ViewChild('messages') messages: ElementRef;
  @ViewChild('messageInput') messageInput: ElementRef;

  constructor(
    private chatService: ChatService,
    private socketService: SocketService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private auth: AuthService,
    private userService: UserService
  ) {
    this.socketService.initSocket();
  }

  ngOnInit() {
    this.auth.getPrincipal().subscribe(principal => this.principal = principal);
    this.route.queryParams.subscribe((params) => {
      this.chatService.superfind({
        _id: params.selected
      }).subscribe(chat => this.openChat(chat[0]));
    });
    this.loadChats();
    this.socketService.onEvent('message').subscribe((message) => {
      this.messagesToShow.push(message);
      this.scrollDown();
    });
  }

  private loadChats() {
    this.chatService.superfind({}).subscribe(chats => {
      this.chats = chats;
    });
  }

  ngOnDestroy() {
    this.socketService.disconnectFromRoom(this.openedChat);
  }

  openChat(chat: Chat) {
    if (chat) {
      this.socketService.disconnectFromRoom(this.openedChat);
      this.openedChat = chat;
      this.socketService.connectToRoom(this.openedChat);
      this.messageService.superfind(
        {chat: this.openedChat._id},
        {createdAt: 1},
        null,
        [{path: 'chat'}, {path: 'sender'}]
      ).subscribe(messages => {
        this.messagesToShow = messages;
        this.scrollDown();
      });
    }
  }

  sendMessage(messageForm: NgForm) {
    const text = messageForm.form.value.message;
    if (text) {
      const message = {
        text: text,
        chat: this.openedChat,
        sender: this.principal,
        createdAt: new Date()
      };
      this.messagesToShow.push((<any>message));
      this.socketService.send(message);
      this.messageInput.nativeElement.value = '';
      this.scrollDown();
    }
  }

  scrollDown() {
    setTimeout(() => {
      this.messages.nativeElement.scrollTop = this.messages.nativeElement.scrollHeight;
    }, 0);
  }

  leaveChat(openedChat: Chat) {
    const members = this.openedChat.members;
    delete members[members.indexOf(this.principal._id)];

    const nameOfChat = this.openedChat.name.split(',').map(name => name.trim());
    delete nameOfChat[nameOfChat.indexOf(this.principal.surname)];
    this.openedChat.name = nameOfChat.join(',');

    this.chatService.update(this.openedChat._id, {members, name: this.openedChat.name})
      .subscribe((chat) => {
        this.openedChat = null;
        this.loadChats();
        this.socketService.leaveRoom(openedChat, this.principal);
      });
  }

  addMember(input: HTMLInputElement) {
    const newMember = input.value;
    if (this.openedChat.members.indexOf(newMember) < 0) {
      this.openedChat.members.push(newMember);
      this.userService.find(newMember).subscribe((user) => {
        const nameOfChat = this.openedChat.name.split(',');
        nameOfChat.push(user.surname);
        this.openedChat.name = nameOfChat.join(',');
        this.chatService.update(this.openedChat._id, {
          name: this.openedChat.name,
          members: this.openedChat.members
        }).subscribe((chat) => {
          this.loadChats();
        });
      });
    }
  }
}
