import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorkRoutingModule } from './my-work-routing.module';
import { MyWorkComponent } from './my-work.component';


@NgModule({
  declarations: [
    MyWorkComponent
  ],
  imports: [
    CommonModule,
    MyWorkRoutingModule
  ]
})
export class MyWorkModule { }
