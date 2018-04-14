import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectorAuth } from "../../../core/index";
import { takeUntil } from "rxjs/operators/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  isAuthenticated;
  title = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  image = "https://img3.telestar.fr/var/telestar/storage/images/3/0/9/0/3090515/la-casa-papel_width1024.jpg";
  postTime = "9 mins";
  postList = [];
  constructor(private store: Store<any>) {
    this.store
      .select(selectorAuth)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }

  ngOnInit() {
    const m = [1, 2, 3, 4, 5, 6, 7, 8];

    m.map(x =>
      this.postList.push(
        new Post({
          description: this.title,
          image: this.image,
          postTime: this.postTime
        })
      )
    );
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
