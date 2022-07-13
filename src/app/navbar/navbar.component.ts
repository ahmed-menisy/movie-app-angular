import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchText: string = '';
  moviesAll: any[] = [];
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {}
  // Function To Get Data From Api
  getSearch(keyword: string): void {
    if (keyword.length > 0) {
      this._MoviesService.getSearch(keyword).subscribe({
        next: (response) => {
          this._MoviesService.searchMovies = response.results;
        }
      });
    }
  }
}
