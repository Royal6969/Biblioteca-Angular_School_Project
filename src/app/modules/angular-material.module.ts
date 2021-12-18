import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatIconModule]
})

export class AngularMaterialModule { }
