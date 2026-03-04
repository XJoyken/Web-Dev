import { Routes } from '@angular/router';
import {HomeComponent} from './home/home';
import {AboutComponent} from './about/about';
import {AlbumsComponent} from './albums/albums';
import {AlbumDetailComponent} from './album-detail/album-detail';
import {AlbumPhotosComponent} from './album-photos/album-photos';
import {NotFoundComponent} from './not-found/not-found';

// export const routes: Routes = [
//   {path: "", redirectTo: "home", pathMatch: "full"},
//   {path: 'home', component: HomeComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'albums', component: AlbumsComponent},
//   {path: 'albums/:id', component: AlbumDetailComponent},
//   {path: 'albums/:id/photos', component: AlbumPhotosComponent},
//   {path: '**', component: NotFoundComponent},
// ];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.AboutComponent),
  },
  {
    path: 'albums',
    loadComponent: () => import('./albums/albums').then(m => m.AlbumsComponent),
  },
  {
    path: 'albums/:id',
    loadComponent: () => import("./album-detail/album-detail").then(m => m.AlbumDetailComponent),
  },
  {
    path: 'albums/:id/photos',
    loadComponent: () => import("./album-photos/album-photos").then(m => m.AlbumPhotosComponent),
  },
  {
    path: '**',
    loadComponent: () => import("./not-found/not-found").then(m => m.NotFoundComponent),
  },
]
