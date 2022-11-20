import { HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'HackerNews';
  afterRefresh: string = '';
  constructor(private router: Router) {
    this.afterRefresh = window.location.href.split('#')[1] || '/news';
    if (this.afterRefresh == '/') {
      this.afterRefresh = 'news'
    }
    console.log(this.afterRefresh)
    this.router.navigate([this.afterRefresh])
  }
}
