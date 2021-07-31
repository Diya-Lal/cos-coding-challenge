import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';


import Components from './component';
import { RouterModule} from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const imports = [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
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
