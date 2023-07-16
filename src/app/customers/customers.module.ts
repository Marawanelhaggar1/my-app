import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ChiledComponent } from '../chiled/chiled.component';
import { ChiledRoutingModule } from '../chiled/chiled-routing.module';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
