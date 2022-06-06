import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FotherComponent } from './fother/fother.component';
import { CardComponent } from './card/card.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FotherComponent,
    CardComponent,
    FormularioComponent,
    BannerComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponetsModule { }
