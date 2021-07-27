import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokePagePage } from './joke-page.page';

const routes: Routes = [
  {
    path: '',
    component: JokePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokePagePageRoutingModule {}
