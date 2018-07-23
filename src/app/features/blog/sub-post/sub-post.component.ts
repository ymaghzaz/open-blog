import { Component, OnInit , OnDestroy ,Input} from "@angular/core";
import { Store } from "@ngrx/store";
import { selectorAuth } from "../../../core/index";
import { takeUntil } from "rxjs/operators/takeUntil";
import { Subject } from "rxjs/Subject";
import { PostBlogService } from "../services/post-blog.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ActivatedRoute ,ParamMap ,  Router} from "@angular/router";
import { PostBlog } from "../models/post.model";
 

@Component({
  selector: "app-sub-post",
  templateUrl: "./sub-post.component.html",
  styleUrls: []
})
export class SubPostComponent implements OnInit , OnDestroy{
  @Input() post:PostBlog;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store<any>,   public router: Router ) {
 
        
  }

  display(){
    window.open(this.post.url, '_blank');
  }
  ngOnInit() {}

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
 
}

