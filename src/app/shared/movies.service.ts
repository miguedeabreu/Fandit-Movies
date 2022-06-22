import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: any[]

  private url = "https://api.themoviedb.org/3/movie/";

  constructor(private http: HttpClient) { }

  getOne(id: string): Observable<Object> {
    return this.http.get(this.url + id + `?api_key=e6572a2811648834a6fade97142b8784&language=es-ES`)
  }

  getAll(): Observable<Object> {
    return this.http.get(this.url + `now_playing?api_key=e6572a2811648834a6fade97142b8784&language=es-ES&page=1`)
  }
}
