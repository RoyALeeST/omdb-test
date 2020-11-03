import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { SearchConfig } from 'src/app/models/SearchConfig';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchConfig: SearchConfig = new SearchConfig();
  fetchedMovies: any[] = [];
  subscription: Subscription;



  @ViewChild("searchBtn") mSearchBtn: ElementRef;


  constructor(private searchService: SearchService,
              public router: Router,
              ) {
                this.fetchedMovies = []
                this.subscription = this.searchService.newMovieSearched$.subscribe(newMovie => {
                  this.fetchedMovies.push(newMovie);
                  this.fetchedMovies.sort((a, b) => {
                    if(a.Year > b.Year){
                      return -1;
                    }else if(a.Year < b.Year){
                      return 1;
                    } else {
                      return 0;
                    }
                  })
                })
               }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  

  ngAfterViewInit(){
    this.mSearchBtn.nativeElement.addEventListener('click', 
    this.searchMovie.bind(this));

  }

  searchMovie() {
    if(this.searchConfig.title != null){
      this.searchService.searchMovie(this.searchConfig).subscribe(
        (data => {
        }),
        (error => {

        }))
    }

  }

}
