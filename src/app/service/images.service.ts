import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable()
export class ImagesService {

  constructor(
    private httpClient: HttpClient,
    private globalConfig: ConfigService,
  ) {
  }

  count(query: string): Observable<any> {
    query = JSON.stringify(query);
    console.log(query);
    return this.httpClient.get<any>(`${this.globalConfig.apiURL}/api/images?aggregate=${query}`);
  }
}
