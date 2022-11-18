import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-heading',
  standalone:true,
  imports:[
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
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
