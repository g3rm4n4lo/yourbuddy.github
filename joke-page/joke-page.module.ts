import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokePagePageRoutingModule } from './joke-page-routing.module';

import { JokePagePage } from './joke-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokePagePageRoutingModule
  ],
  declarations: [JokePagePage]
})
export class JokePagePageModule {}
