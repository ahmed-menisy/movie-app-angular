import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  updateData: any;
  trendingName: string = 'Search';
  moviesAll: any[] = [];
  aosSearch: string = 'flip-up';
  subscrip: Subscription = new Subscription();
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.subscrip = interval(1).subscribe(() => {
      this.moviesAll = this._MoviesService.searchMovies;
    });
  }
  ngOnDestroy(): void {
    this.subscrip.unsubscribe();
  }
}
