import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatsComponent} from './chats.component';
import { RoomComponent } from './room/room.component';
import { MessageComponent } from './message/message.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatsComponent, RoomComponent, MessageComponent]
})
export class ChatsModule { }
