import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule, MatDialogModule, MatTableModule, MatMenuModule,
    MatButtonModule, MatListModule, MatInputModule, MatDividerModule,
    MatToolbarModule, MatIconModule, MatBadgeModule, MatSidenavModule,
    MatGridListModule, MatPaginatorModule,MatExpansionModule, MatCheckboxModule,
  ]

})
export class MaterialModule { }
