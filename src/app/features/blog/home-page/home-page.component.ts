import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectorAuth } from "../../../core/index";
import { takeUntil } from "rxjs/operators/takeUntil";
import { Subject } from "rxjs/Subject";
import { PostBlogService } from "../services/post-blog.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  isAuthenticated;

  postList = [];
  constructor(private store: Store<any>, postBlogService: PostBlogService) {
    this.store
      .select(selectorAuth)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));

    this.postList = postBlogService.postList;
    console.log(this.postList)
  }

  ngOnInit() {}
}
