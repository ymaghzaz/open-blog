export class PostBlog {
  ID:string;
  local_ID:string;
  title: string ;
  image: string ;
  content: string;
  postDescription: string;
  excerpt:string;
  date:Date;
  url:string;

  constructor(post?:any) {
    this.ID = (post && post.global_ID)  || (post && post.ID) || null;
    this.local_ID = (post && post.ID) || (post && post.local_ID)  || null;
    this.title = (post && post.title) || null;
    this.url = (post && post.short_URL) ||(post && post.url) || null; 
    this.image = (post && post.featured_image) ||(post && post.featured_image) || null;
    this.date = (post && post.date) || null;
    this.content = post && post.content;
    this.postDescription = post && post.postDescription;
    this.excerpt = post && post.excerpt;
   
  }
}
