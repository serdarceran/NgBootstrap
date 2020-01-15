import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostContentComponent } from './post-content/post-content.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: PostContentComponent
  },
  {
    path: 'about', component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
