import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components

const routes: Routes = [
  { path: 'home', loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
