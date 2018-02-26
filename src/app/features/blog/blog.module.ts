import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogRoutingModule } from './blog-rooting.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule
  ],
  declarations: [HomePageComponent]
})
export class BlogModule { }
