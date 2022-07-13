import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  trendingName: string = 'Popular';
  moviesAll: any[] = [];
  aosPop: string = 'zoom-in';
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
      .getMoviesData('movie/popular')
      .subscribe({
        next: (response) => {
          this.moviesAll = response.results;
        },
      });
  }
}
