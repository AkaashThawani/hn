import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(window.location)
  }

  goto(route:string){
    this.router.navigateByUrl(route)
  }

}
