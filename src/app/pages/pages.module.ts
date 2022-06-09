import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponetsModule } from '../componets/componets.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponetsModule
  ]
})
export class PagesModule { }
