import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';


import Components from './component';
import { RouterModule} from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


const imports = [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
]


@NgModule({
    declarations: [
        ...Components,
    ],
  imports: [
    ...imports
  ],
  exports: [
    ...imports,
    ...Components
  ]
})

export class SharedModule { }
