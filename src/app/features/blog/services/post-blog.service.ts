import { Injectable } from "@angular/core";
import { PostBlog } from "../models/post.model";

@Injectable()
export class PostBlogService {
  postList: PostBlog[] = [];
  constructor() {}
}
