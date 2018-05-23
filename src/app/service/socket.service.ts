import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as socketIo from 'socket.io-client';
import {ConfigService} from './config.service';
import {Message} from '../models/Message';
import {Chat} from '../models/Chat';
import {User} from '../models/User';

@Injectable()
export class SocketService {
  private socket;


  constructor(
    private globalConfig: ConfigService
  ) {
  }

  public initSocket(): void {
    this.socket = socketIo(this.globalConfig.apiURL);
  }

  public send(message: any): void {
    this.socket.emit('message', message);
  }

  public connectToRoom(room: Chat) {
    this.socket.emit('connectToRoom', room);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, (data) => observer.next(data));
    });
  }

  disconnectFromRoom(openedChat: Chat) {
    this.socket.emit('disconnectFromRoom', openedChat);
  }

  leaveRoom(openedChat: Chat, principal: User) {
    this.socket.emit('leaveRoom', {chat: openedChat, user: principal});
  }
}
