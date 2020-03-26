import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/Topic';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {

 topic: Topic = {
    topic_id: 0,
    name: '',
    contenido: '',
    categorie_id: 0,
    tiempo: 0,
    link: '',
    picture: '',
    visitas: 0,
    likes: 0,
    isActive: 0
  };


  constructor() { }

  ngOnInit() {
  }

  guardarTema() {
    console.log(this.topic);
  }

}
