import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/Post';
import {ConfigService} from './config.service';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient,
    private globalConfig: ConfigService
  ) {
  }

  create(post: any): Observable<Post> {
    return this.http.post<Post>(`${this.globalConfig.apiURL}/api/posts`, post);
  }

  superfind(query = {}, populate = []): Observable<Post[]> {
    query = JSON.stringify(query);
    return this.http.get<Post[]>(`${this.globalConfig.apiURL}/api/posts?query=${query}&populate=${populate}`);
  }

  remove(_id: string): Observable<any> {
    return this.http.delete(`${this.globalConfig.apiURL}/api/posts/${_id}`);
  }

}
