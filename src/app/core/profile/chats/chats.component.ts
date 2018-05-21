import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketService} from '../../../service/socket.service';
import {Chat} from '../../../models/Chat';
import {ChatService} from '../../../service/chat.service';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../../../models/Message';
import {MessageService} from '../../../service/message.service';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/User';
import {AuthService} from '../../../service/auth.service';

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

  constructor(
    private chatService: ChatService,
    private socketService: SocketService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private auth: AuthService
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
    this.chatService.superfind({}).subscribe(chats => {
      this.chats = chats;
    });
    this.socketService.onEvent('message').subscribe((message) => {
      this.messagesToShow.push(message);
    });
  }

  ngOnDestroy() {
    this.socketService.disconnectFromRoom(this.openedChat);
  }

  openChat(chat: Chat) {
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
    });
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
    }
  }
}
