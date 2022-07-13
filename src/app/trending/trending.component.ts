import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  trendingName: string = 'Trending All This Week';
  moviesAll: any[] = [];
  aosTrend:string ='fade-up'
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.aosAnimation();
    this.getTrendingMovies();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this._MoviesService.getMoviesData('trending/all/week').subscribe({
      next: (response) => {
        this.moviesAll = response.results;
      },
    });
  }
}
