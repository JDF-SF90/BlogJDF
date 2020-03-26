import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/Topic';
import { TopicsService } from '../../services/topics.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {

  categorias: any = [];

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
    isActive: 1
  };


  constructor(private topicService: TopicsService, private categorieService: CategoriesService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categorieService.getCategories().subscribe(
      res => {
        this.categorias = res;
        console.log(this.categorias);
      },
      err => console.log(err)
    );
  }

  onChange(value) {
    if (value.checked === true) {
      this.topic.isActive = 1;
      console.log(1);
    } else {
      this.topic.isActive = 0;
      console.log(0);
    }
  }

guardarTema() {
    console.log(this.topic);
    this.topicService.saveTopic(this.topic).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
