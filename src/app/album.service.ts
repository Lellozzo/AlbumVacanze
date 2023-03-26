import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, PhotoRoot, Root  } from './models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) {}
  
  search(): Observable<Root> {
    return this.http.get<Root>("https://jsonplaceholder.typicode.com/albums");
  }
  
  getAlbumById(id: string): Observable<PhotoRoot> {
    return this.http.get<PhotoRoot>("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
  }
}
