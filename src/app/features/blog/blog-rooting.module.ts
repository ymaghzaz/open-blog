import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';



const routes: Routes = [
    { path: '', component: HomePageComponent },
    {
        path: 'post/:postID',
       component:PostComponent
      },
      {
        path: 'post',
        redirectTo: '' 
      },
      {
        path: 'edit-post/:postID',
       component: EditPostComponent
      },{
        path: 'edit-post',
        redirectTo: '' 
      },
      { path: '**',  redirectTo: '' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }