import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from '../utils/my-date-formats';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [MatSelectModule, MatOptionModule, MomentDateModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatIconModule],
  exports: [MatSelectModule, MatOptionModule, MomentDateModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatIconModule],
  providers: [
    {
      provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS
    }
  ]
})

export class AngularMaterialModule { }
