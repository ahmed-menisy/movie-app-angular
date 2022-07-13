import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  trendingName: string = 'Popular';
  moviesAll: any[] = [];
  aosPop:string = 'zoom-in'
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this._MoviesService.getMoviesData('movie/popular').subscribe({
      next: (response) => {
        this.moviesAll = response.results;
      }
    });
  }
}
