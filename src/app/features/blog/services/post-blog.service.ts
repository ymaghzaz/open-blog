import { Injectable } from "@angular/core";
import { PostBlog } from "../models/post.model";
import { Router } from "@angular/router";

@Injectable()
export class PostBlogService {

  postList: PostBlog[] = [];
  constructor(public router: Router) {
    this.createPostOpenInscription();

  }
  createPostOpenInscription() {
    let openInscrition: PostBlog = new PostBlog({});
    openInscrition.image = 'https://firebasestorage.googleapis.com/v0/b/umg-compte.appspot.com/o/img%2FInscriptions_ouvertes.png?alt=media&token=2e9a6c58-f303-4a31-a2c4-18abe1b0c4f2'
    openInscrition.title = 'Inscription ouverte';
    openInscrition.description = "Inscription ouverte pour la session 2018/2019 , Veuillez cree une compte dans le site";
    openInscrition.postTime = '30-06-2018';
    openInscrition.postDescription = 'umg ouvrr';
    openInscrition.display = () => {
      this.router.navigate(["register"]);
    }
    this.postList.push(openInscrition)
  }
}
