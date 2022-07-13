import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {

  trendingName: string = 'Now Playing';
  moviesAll: any[] = [];
  aosNow:string = 'zoom-out'
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this._MoviesService.getMoviesData('movie/now_playing').subscribe({
      next: (response) => {
        this.moviesAll = response.results;
      }
    });
  }
}