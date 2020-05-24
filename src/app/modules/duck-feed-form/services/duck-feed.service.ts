import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DuckFeedService {

  constructor(private http: HttpClient) { }

}
