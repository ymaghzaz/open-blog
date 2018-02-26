import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  image = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg';
  postTime = '9 mins'
  postList = []
  constructor() { }

  ngOnInit() {
    const m = [1, 2, 3, 4, 5, 6, 7, 8];

    m.map(x => this.postList.push(new Post({
      description: this.title,
      image: this.image,
      postTime: this.postTime
    })))
  }

}


class Post {
  title: string;
  image: string;
  description: string;
  postDescription: string;
  postTime: string;

  constructor(obj) {
    this.title = obj.title;
    this.image = obj.image;
    this.description = obj.description;
    this.postDescription = obj.postDescription;
    this.postTime = obj.postTime;
  }

}