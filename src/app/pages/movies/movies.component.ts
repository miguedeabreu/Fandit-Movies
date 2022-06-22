import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: any | undefined;

  constructor(public moviesService: MoviesService) { 
    this.movies = undefined
  }

  getMovies() {
    this.moviesService.getAll().subscribe((data: any) => {
      this.movies = data
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}