import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostContentComponent } from './post-content/post-content.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: PostContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
