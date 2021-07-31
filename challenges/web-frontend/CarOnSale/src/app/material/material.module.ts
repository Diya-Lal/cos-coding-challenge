import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule  } from '@angular/material/grid-list';
import { MatCardModule  } from '@angular/material/card';

const imports = [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule
]

@NgModule({
    declarations:[],
    imports: [
        ...imports
    ],
    exports: [
        ...imports
    ]
})

export class MaterialModule {}