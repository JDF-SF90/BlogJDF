import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service';
import { Topic } from '../../models/Topic';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  id: string;

  topics: any = [];

  constructor(private topicService: TopicsService, private activateRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getTopic(this.id);
  });
}

getTopic(id: string) {
    this.topicService.getTopic(id).subscribe(
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
