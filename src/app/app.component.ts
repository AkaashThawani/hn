import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { RouterOutlet } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
    LandingComponent,
  ],
})
export class AppComponent {
  title = 'HackerNews';
  afterRefresh: string = '';
  constructor(private router: Router) {
    this.afterRefresh = window.location.href.split('#')[1] || '/news';
    if (this.afterRefresh == '/') {
      this.afterRefresh = 'news'
    }
    // console.log(this.afterRefresh)
    this.router.navigate([this.afterRefresh])
  }
}
