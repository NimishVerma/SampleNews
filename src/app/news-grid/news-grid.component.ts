import { NewsService } from './../shared/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsGridComponent implements OnInit {
news : any[]
handleSuccess(data){
  this.news = []  
for(var i = 0, len =data.length; i<len; i++){
  let value = data[i]
  
  var a = value.t;
  var b =value.a;
  var c= value.i;
  console.log(this.news);
  this.news.push({title:a,url:b,img:c})
}
  
}
  constructor(private _newsService:NewsService) { }
  searchNews(){
    return this._newsService.getNews().subscribe(
      data => this.handleSuccess(data),
      error => console.log(error),
      () =>console.log("works")
      
    )
  }

  ngOnInit() {
  }

}
