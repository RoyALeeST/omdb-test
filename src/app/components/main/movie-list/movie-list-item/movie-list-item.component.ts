import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router,} from '@angular/router';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: Movie;
  @Input() index: number;

  @ViewChild("movieCard") mCardMovie: ElementRef;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mCardMovie.nativeElement.addEventListener('click', 
    this.navigateToDetails.bind(this));
  }

  navigateToDetails(){
    this.router.navigate([`/home/detail/${this.index}`])
  }

}
