import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiledRoutingModule } from './chiled-routing.module';
import { ChiledComponent } from './chiled.component';


@NgModule({
  declarations: [
    ChiledComponent
  ],
  imports: [
    CommonModule,
    ChiledRoutingModule
  ]
})
export class ChiledModule { }
