import { Injectable } from "@angular/core";
import { PostBlog } from "../models/post.model";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostBlogService {

  postList: PostBlog[] = [];
  constructor(public router: Router , private http: HttpClient) {
    console.log('hello service')
      if(!this.postList.length){
        this.fetchPost().subscribe( (response:any) =>{
            const posts = response && response.posts || [];
            posts.map(post =>{ this.postList.push(new PostBlog(post));})
           
            console.log('hello post',this.postList)
      })
      }
  }

  fetchPost(){
    return  this.http.get<any[]>('https://us-central1-fir-1c01b.cloudfunctions.net/fetchPosts',{
        params: {
          for: 'umguyancourt.wordpress.com',
        }
    });
  }

 
}
