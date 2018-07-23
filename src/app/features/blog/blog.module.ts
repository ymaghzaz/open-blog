import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { BlogRoutingModule } from "./blog-rooting.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/index";
import { PostBlogService } from "./services/post-blog.service";
import { SubPostComponent } from "./sub-post/sub-post.component";
import { MomentModule } from 'ngx-moment';
@NgModule({
  providers: [PostBlogService],
  imports: [CommonModule, FormsModule, SharedModule, BlogRoutingModule , MomentModule],
  declarations: [HomePageComponent,SubPostComponent]
})
export class BlogModule {}
