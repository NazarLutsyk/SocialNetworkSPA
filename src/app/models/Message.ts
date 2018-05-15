import {User} from './User';
import {Chat} from './Chat';

export class Message {

  constructor(
    public _id: string = '',
    public text: string = '',
    public sender: string = '',
    public senderObj: User = null,
    public chat: string = '',
    public chatObj: Chat = null,
  ) {}
}
