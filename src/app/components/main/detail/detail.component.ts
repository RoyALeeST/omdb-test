import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  movie: any;
  index: number;
  constructor(private searchService: SearchService, 
              private activatedRoute: ActivatedRoute) {
                let self = this;
                this.activatedRoute.paramMap.subscribe(params => {
                  self.index = parseInt(params.get('id'));
                  self.movie = self.searchService.getMovieAtIndex(self.index);
                });
  }

  ngOnInit(): void {

  }

}
