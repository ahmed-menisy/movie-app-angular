import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class TvshowComponent implements OnInit {
  trendingName: string = 'Trending Tv Shows This Week';
  moviesAll: any[] = [];
  aosTv:string = 'flip-left'
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this._MoviesService.getMoviesData('trending/tv/week').subscribe({
      next: (response) => {
        this.moviesAll = response.results;
      },
    });
  }
}
