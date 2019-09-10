import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() 
  {
   }

  ngOnInit()
   {
    let sHeight = $('#space').css("height");
    let navHeight= $('.fixed-top').css("height");
    $('#space').css("height",`${navHeight}`);
  }
 
}
