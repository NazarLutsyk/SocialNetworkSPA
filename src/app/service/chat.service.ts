import {Injectable} from '@angular/core';
import {Chat} from '../models/Chat';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChatService {

  constructor(
    private http: HttpClient,
    private globalConfig: ConfigService
  ) {
  }

  create(post: any): Observable<Chat> {
    return this.http.post<Chat>(`${this.globalConfig.apiURL}/api/chats`, post);
  }

  superfind(query = {}, populate = []): Observable<Chat[]> {
    query = JSON.stringify(query);
    return this.http.get<Chat[]>(`${this.globalConfig.apiURL}/api/chats?query=${query}`);
  }

  remove(_id: string): Observable<any> {
    return this.http.delete(`${this.globalConfig.apiURL}/api/chats/${_id}`);
  }


}
