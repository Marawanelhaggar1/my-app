import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiledComponent } from './chiled.component';

const routes: Routes = [{ path: '', component: ChiledComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiledRoutingModule { }
