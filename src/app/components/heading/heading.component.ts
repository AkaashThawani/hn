import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    FlexLayoutModule
  ],
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(window.location)
  }

  goto(route: string) {
    this.router.navigateByUrl(route)
  }

}
