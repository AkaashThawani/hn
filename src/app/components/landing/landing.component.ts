import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    standalone: true,
    imports: [
    CommonModule,
    RouterModule,
  ],
})
export class LandingComponent {

}
