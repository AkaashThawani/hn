
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  type:string='news';
  constructor(private activateRoute:ActivatedRoute,private router:Router){
    // this.type=this.activateRoute.snapshot.params['id'];
    // console.log(this.activateRoute)
  }

  ngOnInit(): void {
    // this.type=this.activateRoute.snapshot.params['id'];
    console.log(this.type)
    this.activateRoute.url.subscribe((res:any)=>{
      console.log(res)
      this.type=res[0].path
    });
  }



}
