import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private apiUrl = 'http://localhost:3000/comics/';
  constructor(private http: HttpClient) {}

  getAllComics() {
    return this.http.get(this.apiUrl);
  }
  getComicById(id: string): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }
  createComic(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  updateComicById(id: string, data: any) {
    return this.http.put(this.apiUrl + id, data);
  }
  deleteComicById(id: string) {
    return this.http.delete(this.apiUrl + id);
  }
}
