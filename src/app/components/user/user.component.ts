import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-user',
  standalone:true,
  imports:[
    HeadingComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username:string='';
  userData:any=[]
  constructor(private activatedRoute:ActivatedRoute,private apiService:APIService) { }

  ngOnInit(): void {
    this.username=this.activatedRoute.snapshot.params['id'];
    this.getUserInfo();
  }

  getUserInfo(){
    this.apiService.getUserByName(this.username).subscribe((res:any)=>{
      this.userData=res;
    })
  }

  getTime(seconds:number){
    return new Date(seconds).toDateString();
  }

}
