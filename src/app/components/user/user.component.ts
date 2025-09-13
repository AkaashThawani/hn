import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { HeadingComponent } from '../heading/heading.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeadingComponent,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class UserComponent implements OnInit {

  username: string = '';
  userData: any = {};

  constructor(private activatedRoute: ActivatedRoute, private apiService: APIService) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['id'];
    this.getUserInfo();
  }

  getUserInfo() {
    this.apiService.getUserByName(this.username).subscribe((res: any) => {
      // ** FIX 2: Call the formatDate function and add the result to a new property. **
      res.createdDate = this.formatDate(res.created);
      this.userData = res;
    });
  }

  // ** FIX 3: Add the function to format the timestamp into a readable date. **
  formatDate(timestamp: number): string {
    if (!timestamp) return ''; // Handle cases where the timestamp might be missing
    const date = new Date(timestamp * 1000); // API provides seconds, so multiply by 1000
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

}