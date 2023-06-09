import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';     
import { BlogComponent } from './blog/blog.component';   

const routes: Routes = [
  { path: '', component: BlogsComponent },     
  { path: ':post_id', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
