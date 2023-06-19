import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  article: any;
  constructor(private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.article = history.state.article;
  }

}
