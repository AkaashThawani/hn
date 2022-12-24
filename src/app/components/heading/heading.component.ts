import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class HeadingComponent implements OnInit {
  isLoading: Subject<boolean> = new Subject<boolean>()
  constructor(private router: Router,private loaderService: LoaderService) { 
    this.isLoading= this.loaderService.isLoading;
  }

  ngOnInit(): void {
    console.log(window.location)
  }

  goto(route: string) {
    this.router.navigateByUrl(route)
  }
  


}
