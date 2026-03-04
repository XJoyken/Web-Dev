import {Component, OnInit} from '@angular/core';
import {delay, map, Observable, switchMap} from 'rxjs';
import {Album} from '../models/album.model';
import {AlbumService} from '../service/album.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  album$!: Observable<Album>;
  constructor(private albumService: AlbumService,
              private router: Router,
              private route: ActivatedRoute) {}
  ngOnInit() {
    this.album$ = this.route.paramMap.pipe(
      delay(2000),
      map(params => Number(params.get("id"))),
      switchMap(id => this.albumService.getAlbum(id))
    );
  }
  saveTitle(album: Album) {
    this.albumService.updateAlbum(album).subscribe({
      next: () => {
        alert("Album updated!");
      }
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
