import { Subscription } from 'rxjs';
import { MoviesService } from './../movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  searchText: string = '';
  moviesAll: any[] = [];
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // Function To Get Data From Api
  getSearch(keyword: string): void {
    if (keyword.length > 0) {
      this.subscription = this._MoviesService.getSearch(keyword).subscribe({
        next: (response) => {
          this._MoviesService.searchMovies = response.results;
        },
      });
    }
  }
}
