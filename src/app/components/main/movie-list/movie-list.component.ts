import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  @Input() fetchedMovies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
