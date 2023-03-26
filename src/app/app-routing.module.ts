import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumDetailComponent }from './album-detail/album-detail.component'; 

const routes: Routes = [
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums', component: AlbumsListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
