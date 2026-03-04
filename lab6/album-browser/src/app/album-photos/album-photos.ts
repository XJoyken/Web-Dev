import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../service/album.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {delay, map, Observable, switchMap} from 'rxjs';
import {Photo} from '../models/photo.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos$!: Observable<Photo[]>;
  albumId!: number;
  constructor(private albumService: AlbumService,
              private route: ActivatedRoute) {
  }
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    this.albumId = Number(idParam);

    this.photos$ = this.route.paramMap.pipe(
      map(params => Number(params.get("id"))),
      switchMap(id => this.albumService.getAlbumPhotos(id))
    );
    console.log(this.photos$);
  }

}
