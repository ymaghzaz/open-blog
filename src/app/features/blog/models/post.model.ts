export class PostBlog {
  postID:string;
  title: string = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  image: string = "https://img3.telestar.fr/var/telestar/storage/images/3/0/9/0/3090515/la-casa-papel_width1024.jpg";
  postTime: string = "9 mins";
  description: string;
  postDescription: string;
 

  constructor(post) {
    this.postID = (post && post.postID) || this.postID;
    this.title = (post && post.title) || this.title;
    this.image = (post && post.image) || this.image;
    this.postTime = (post && post.postTime) || this.postTime;
    this.description = post && post.description;
    this.postDescription = post && post.postDescription;
   
  }
}
