import { HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { CoreModule } from './material/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CoreModule,
    BrowserModule,
    FlexLayoutModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'HackerNews';
  afterRefresh: string = '/';
  constructor(private router: Router) {
    // this.afterRefresh = window.location.href.split('#')[1] || '/news';
    if (this.afterRefresh == '/') {
      this.afterRefresh = 'news'
    }
    console.log('ar',this.afterRefresh)
    this.router.navigate(['news'])
  }
}

