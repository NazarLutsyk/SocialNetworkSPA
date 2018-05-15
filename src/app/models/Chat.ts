import {User} from './User';

export class Chat {

  constructor(
    public _id: string = '',
    public name: string = '',
    public members: string[] = [],
    public membersObj: User[] = []
  ) {}
}
