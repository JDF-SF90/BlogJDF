import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  id: string;
  topics: any = [];

  constructor(private topicService: TopicsService,
              private activateRoute: ActivatedRoute,
              private route: Router
    ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.getTopics(this.id);
      } else {
      this.getTopics('');
      }});
  }

  getTopics(id: string) {
    if (Boolean(id)) {
      this.topicService.getTopicsByCategorieId(id).subscribe(
        res => {
          this.topics = res;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    } else {
    this.topicService.getTopics().subscribe(
      res => {
        this.topics = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    }
  }

}
