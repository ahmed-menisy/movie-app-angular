import { Subscription, delay } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css'],
})
export class NowplayingComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  trendingName: string = 'Now Playing';
  moviesAll: any[] = [];
  aosNow: string = 'zoom-out';
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this.subscription = this._MoviesService
      .getMoviesData('movie/now_playing')
      .pipe(delay(1300))
      .subscribe({
        next: (response) => {
          this.moviesAll = response.results;
        },
      });
  }
}
