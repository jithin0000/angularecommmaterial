import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule, MatDialogModule, MatTableModule, MatMenuModule,
    MatButtonModule, MatListModule, MatInputModule, MatDividerModule,
    MatToolbarModule, MatIconModule, MatBadgeModule, MatSidenavModule,
    MatGridListModule, MatPaginatorModule,NgxImageZoomModule, MatCheckboxModule,
    FormsModule,ReactiveFormsModule,
    FlexLayoutModule,NgxFileDropModule



  ]
})
export class SharedModule { }
