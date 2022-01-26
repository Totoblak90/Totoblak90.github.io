import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMERoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';


@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMERoutingModule
  ]
})
export class AboutMEModule { }
