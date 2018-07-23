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
  public theHtmlString = "<p>Début du Ramadan 2016 / 1437 h</p>\n<p>Le Bureau du Conseil Français du Culte Musulman (CFCM), réuni ce Dimanche 5 juin 2016 à la Grande Mosquée de Paris, en présence de dignitaires religieux et de représentants de fédérations musulmanes, annonce que le premier jour du mois sacré du Ramadan pour l’an 1437 de l’Hégire est fixé au :<br />\nLundi 6 Juin 2016<br />\nEn cette circonstance bénie, le CFCM présente ses meilleurs vœux aux Musulmans de France et leur souhaite un heureux mois du jeûne, mois de la piété et du partage.<br />\nNous implorons Allah Tout Puissant pour qu’Il accepte notre jeûne, qu’Il nous comble de Sa Clémence et de Sa Miséricorde, qu’Il nous accorde la Paix et soulage tous ceux qui souffrent dans les épreuves qui les frappent.<br />\nLe CFCM saisit cette occasion pour assurer l’ensemble de nos concitoyens de toutes confessions, de toutes origines et de toutes conditions, de ses prières fraternelles pour que notre Nation vive dans la paix, l’unité et la solidarité.<br />\nFait à Paris, le Dimanche 5 Juin 2016,<br />\nAnouar KBIBECH<br />\nPrésident du CFCM<br />\n<img data-attachment-id=\"64\" data-permalink=\"https://mosqueeguyancourt.wordpress.com/2016/06/06/debut-du-ramadan-le-lundi-6-juin-2016/cfcm/\" data-orig-file=\"https://mosqueeguyancourt.files.wordpress.com/2016/06/cfcm.jpg\" data-orig-size=\"870,537\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"CFCM\" data-image-description=\"\" data-medium-file=\"https://mosqueeguyancourt.files.wordpress.com/2016/06/cfcm.jpg?w=300&#038;h=185\" data-large-file=\"https://mosqueeguyancourt.files.wordpress.com/2016/06/cfcm.jpg?w=870\" src=\"https://mosqueeguyancourt.files.wordpress.com/2016/06/cfcm.jpg?w=300&#038;h=185\" alt=\"\" width=\"300\" height=\"185\" class=\"alignnone size-medium wp-image-64\" srcset=\"https://mosqueeguyancourt.files.wordpress.com/2016/06/cfcm.jpg?w=300&amp;h=185 300w, https://mosqueeguyancourt.files.wordpress.com/2016/06/cfcm.jpg?w=600&amp;h=370 600w, https://mosqueeguyancourt.files.wordpress.com/2016/06/cfcm.jpg?w=150&amp;h=93 150w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></p>\n"
   
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

