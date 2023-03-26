import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album, Root } from '../models/album';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

 constructor(public albumService: AlbumService) {}
 
 albums?: Root;
 
  ngOnInit(): void {
    this.getAlbums();
  }

getAlbums() {
this.albumService.search().subscribe(res => {
console.log (res);
this.albums = res;
  })
  }

}
