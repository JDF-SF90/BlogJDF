import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../models/Topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTopics() {
    return this.http.get(`${this.API_URI}/topics`);
  }

  getTopic(id: string) {
    return this.http.get(`${this.API_URI}/topics/${id}`);
  }

  deleteTopic(id: string) {
    return this.http.delete(`${this.API_URI}/topics/${id}`);
  }

  saveTopic(topic: Topic) {
    return this.http.post(`${this.API_URI}/topics`, topic);
  }

  updateTopic(id: string, topic: Topic): Observable<any> {
    return this.http.put(`${this.API_URI}/topics/${id}`, topic);
  }

}
