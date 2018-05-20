import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatsComponent} from './chats.component';
import { RoomComponent } from './room/room.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatsComponent, RoomComponent, MessageComponent]
})
export class ChatsModule { }
