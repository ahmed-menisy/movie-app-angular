import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
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
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.updateData = setInterval(() => {
      this.moviesAll = this._MoviesService.searchMovies;
    }, 1);
  }
  ngOnDestroy(): void {
    clearInterval(this.updateData);
  }
  // Function To Get Data From Api
}
