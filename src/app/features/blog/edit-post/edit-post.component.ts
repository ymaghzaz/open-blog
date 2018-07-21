import { Component, OnInit , OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectorAuth } from "../../../core/index";
import { takeUntil } from "rxjs/operators/takeUntil";
import { Subject } from "rxjs/Subject";
import { PostBlogService } from "../services/post-blog.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ActivatedRoute ,ParamMap ,  Router} from "@angular/router";
declare var Quill: any;

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: []
})
export class EditPostComponent implements OnInit , OnDestroy{
  private unsubscribe$: Subject<void> = new Subject<void>();
   
  public postID$ :BehaviorSubject<string> = new BehaviorSubject(''); 
  public editPostInfo : any  = "<p>Hello World!</p> ";
  public post$ :BehaviorSubject<any> = new BehaviorSubject([{}]);
 
 
   
  constructor(private store: Store<any>, postBlogService: PostBlogService,    private route: ActivatedRoute,
    private router: Router,) {
        this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe((params: ParamMap) =>{this.postID$.next(params.get('postID'))}) 
        this.postID$.subscribe(x =>{
            console.log('hello', x)
        })

  
  }

  ngOnInit() {

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ];

    var quill = new Quill('#editor', {
      modules: {
    toolbar: toolbarOptions
  },
    
      
        theme: 'snow'
      });

     this.editPostInfo =  quill.root.innerHTML;

     console.log('he', this.editPostInfo)
      console.log( 'helllo' , quill)
    
  }
  storePost(){
      console.log('sotre', this.editPostInfo)
  }
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
 
}

