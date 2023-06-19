import { Component } from '@angular/core';
import { GetdataService } from '../getdata.service';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
})
export class Tab1Page {
  data: any;
  constructor(public getdata: GetdataService, private router: Router) {}

  ngOnInit() {
    this.getdata.doGet().subscribe((res) => {
      this.data = res.data.articles;
      console.log(this.data);
    });
    
  }
  openNewsDetails(article: any) {
    this.router.navigate(['tabs/tab1/news-details'], { state: { article } });
  }
}
