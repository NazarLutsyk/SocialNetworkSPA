import {User} from './User';
import {Chat} from './Chat';

export class Message {

  constructor(
    public _id: string = '',
    public text: string = '',
    public sender: User = null,
    public chat: Chat = null
  ) {}
}
