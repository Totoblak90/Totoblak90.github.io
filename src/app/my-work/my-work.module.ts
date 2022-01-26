import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorkRoutingModule } from './my-work-routing.module';
import { MyWorkComponent } from './my-work.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MyWorkComponent
  ],
  imports: [
    CommonModule,
    MyWorkRoutingModule,
    RouterModule
  ]
})
export class MyWorkModule { }
