import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Movie } from '../models/Movie';
import { SearchConfig } from '../models/SearchConfig';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // eventemitter for new movies
  private newMovieSearched = new Subject<Movie>();
  newMovieSearched$ = this.newMovieSearched.asObservable();

    // eventemitter for new movies
    private prevMovieSearched = new Subject<Movie[]>();
    prevMovieSearched$ = this.prevMovieSearched.asObservable();

  apiURL = 'http://www.omdbapi.com/?';

  /************************ PUT YOU API KEY HERE *****************/
  apiKey="apikey=f275c3f9&"
// Supposing this is a real app let's keep a record of already fetched movies in case user goes back and forth between routes
  private fetchedMoviesID: String[] = []; 
  // If user comes back to search page we already have previosly searched movies on this array
  private fetchedMovies: any[] = [];

  constructor(private http: HttpClient) { }

  public getFetchedMovies(){
    return this.fetchedMovies;
  }

  // helper function to emulate an http request for movie details
  getMovieAtIndex(index: number): Movie{
    return this.fetchedMovies[index];
  }

  searchMovie(config: SearchConfig): Observable<any> {
    let stringSearchParams = this.formatRequestString(config);
    return this.http.get<Movie>(this.apiURL + this.apiKey + stringSearchParams)  
    .pipe(
      map((response)=> {
        this.handleMoviewSearchResult(response)
      }),
      catchError(this.handleError)
    )
  }

  private formatRequestString(config: SearchConfig): String {
    let paramsString = '';
    for(const property in config){
      switch (property.toLowerCase()) {
        case "title":
          (config[property] != null) ? (paramsString += `t=${config[property]}&`) : (paramsString += ``)
        break;
        case "year":
          (config[property] != null) ? (paramsString += `y=${config[property]}&`) : (paramsString += ``)
        break;
        case "type":
          (config[property] != null) ? (paramsString += `type=${config[property]}&`) : (paramsString += ``)
        break;
        case "plot":
          (config[property] != null) ? (paramsString += `plot=${config[property]}&`) : (paramsString += ``)
        break;
        default:
          break;
      }
    }

    return paramsString;
  }

    
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

 handleMoviewSearchResult(newMovie: Movie) {

    if (!this.fetchedMovies.some(el => el.imdbID === newMovie.imdbID)) {
      this.fetchedMovies.push(newMovie);
      this.newMovieSearched.next(newMovie);
    } else {
      this.newMovieSearched.next(newMovie);
    }
  }
}
