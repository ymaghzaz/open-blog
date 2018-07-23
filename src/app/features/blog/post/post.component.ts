import { Component, OnInit , OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectorAuth } from "../../../core/index";
import { takeUntil } from "rxjs/operators/takeUntil";
import { Subject } from "rxjs/Subject";
import { PostBlogService } from "../services/post-blog.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ActivatedRoute ,ParamMap ,  Router} from "@angular/router";
 

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: []
})
export class PostComponent implements OnInit , OnDestroy{
  private unsubscribe$: Subject<void> = new Subject<void>();
   
  public postID$ :BehaviorSubject<string> = new BehaviorSubject(''); 
 
  constructor(private store: Store<any>, postBlogService: PostBlogService,    private route: ActivatedRoute,
    private router: Router,) {
        this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe((params: ParamMap) =>{this.postID$.next(params.get('postID'))}) 
        this.postID$.subscribe(x =>{
            console.log('hello', x)
        })
  }

  ngOnInit() {}

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
 
}

