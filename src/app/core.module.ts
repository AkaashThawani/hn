import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: []

})
export class CoreModule {}