import {Component, OnInit} from '@angular/core';
import {Album} from '../models/album.model';
import {AlbumService} from '../service/album.service';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, delay} from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  private albumsSubject = new BehaviorSubject<Album[] | null>(null);
  albums$ = this.albumsSubject.asObservable();
  constructor(private albumService: AlbumService) {}
  ngOnInit() {
    this.initialLoading();
  }
  initialLoading() {
    this.albumService.getAlbums().pipe(delay(2000)).subscribe({
      next: data => {
        this.albumsSubject.next(data);
      },
      error: err => {
        console.error(err);
        this.albumsSubject.next(null);
      }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        const currentAlbum = this.albumsSubject.value;
        if(currentAlbum) {
          const updatedList = currentAlbum.filter(album => album.id !== id);
          this.albumsSubject.next(updatedList);
        }
      }
    });
  }
}
