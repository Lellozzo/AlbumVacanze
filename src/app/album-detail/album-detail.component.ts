import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album, PhotoRoot } from '../models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit{
  constructor(
    private route: ActivatedRoute, private albumService: AlbumService
  ) {}

  photos?: PhotoRoot
  ngOnInit(): void {
    let id =  this.route.snapshot.paramMap.get("id")

    if (id) {
      this.albumService.getAlbumById(id).subscribe(res => {
this.photos = res;
      })
    }
  }

}

