import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare const myTest: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  /**
   * Note: ElementRef allows direct access to the DOM which could risk your app to XSS attacks. 
   * There are other alternatives to directly access the DOM.
   */
  @ViewChild("textLanding") mLandingText: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(){
    this.mLandingText.nativeElement.addEventListener('click', 
    this.navigateToSearch.bind(this));

  }

  private navigateToSearch(){
    this.router.navigateByUrl('/home/search');
  }

}
