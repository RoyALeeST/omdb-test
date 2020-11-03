import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
  // External
  import { RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';

  // Custom
  import { HomeRoutingModule } from '../../router/home/home-routing.module';
  import { MaterialModule } from '../../modules/material/material.module';


// Components
import { HomeComponent } from '../../components/main/home/home.component';
import { SearchComponent } from '../../components/main/search/search.component';
import { DetailComponent } from '../../components/main/detail/detail.component';
import { MovieListComponent } from '../../components/main/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/main/movie-list/movie-list-item/movie-list-item.component';

@NgModule({
  declarations: [  
    HomeComponent,
    SearchComponent,
    DetailComponent,
    MovieListComponent,
    MovieListItemComponent,
  ],
  imports: [
    HomeRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
