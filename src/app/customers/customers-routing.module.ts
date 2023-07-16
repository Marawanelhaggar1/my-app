import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ChiledComponent } from '../chiled/chiled.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [{ path: 'child-1', component: ChiledComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
