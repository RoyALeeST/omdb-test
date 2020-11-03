import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/main/home/home.component';
import { SearchComponent } from '../../components/main/search/search.component';
import { DetailComponent } from '../../components/main/detail/detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }
