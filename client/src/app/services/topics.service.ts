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

  getTopicsByCategorieId(id: string) {
    return this.http.get(`${this.API_URI}/topics/${id}`);
  }

  getTopic(id: string) {
    return this.http.get(`${this.API_URI}/topics/topic/${id}`);
  }

  deleteTopic(id: string) {
    return this.http.delete(`${this.API_URI}/topics/${id}`);
  }

  saveTopic(topic: Topic, file: File) {
    console.log(topic);
    console.log(file.name);

    const fd = new FormData();
    fd.append('isActive', topic.isActive.toString());
    fd.append('name', topic.name);
    fd.append('contenido', topic.contenido);
    fd.append('categorie_id', topic.categorie_id.toString());
    fd.append('tiempo', topic.tiempo.toString());
    fd.append('link', topic.link);
    fd.append('image', file);

    return this.http.post(`${this.API_URI}/topics`, fd);

  }

  updateTopic(id: string, topic: Topic): Observable<any> {
    return this.http.put(`${this.API_URI}/topics/${id}`, topic);
  }

}
