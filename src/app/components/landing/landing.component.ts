
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit,OnChanges {

  type:string='news';
  constructor(private activateRoute:ActivatedRoute,private router:Router){
    console.log(this.activateRoute)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.type=this.activateRoute.snapshot.params['id'];
    console.log(this.type)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('cd l')
    this.type=this.activateRoute.snapshot.params['id'];
  }



}
