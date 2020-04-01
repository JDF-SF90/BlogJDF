import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/Topic';
import { TopicsService } from '../../services/topics.service';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {

  file: File;
  fileSelected: string | ArrayBuffer;
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


  constructor(private topicService: TopicsService, private categorieService: CategoriesService, private router: Router) { }

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

    this.topicService.saveTopic(this.topic, this.file).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/topics']);
      },
      err => {
        console.log(err);
      }
    );
  }

  onFileSelected(event: HtmlInputEvent){
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0] as File;

      const reader = new FileReader();
      reader.onload = e => this.fileSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

}
