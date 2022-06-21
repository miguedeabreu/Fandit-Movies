import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public movie: any | undefined;

  constructor(public moviesService: MoviesService) { 
    this.movie = undefined
  }

  getMovie(id: string) {
    this.moviesService.getOne(id).subscribe((data: any) => {
      console.log(data);
      this.movie = data
    })
  }

  ngOnInit(): void {
  }

}