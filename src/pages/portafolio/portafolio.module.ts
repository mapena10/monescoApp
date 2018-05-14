import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortafolioPage } from './portafolio';

@NgModule({
  declarations: [
    PortafolioPage,
  ],
  imports: [
    IonicPageModule.forChild(PortafolioPage),
  ],
})
export class PortafolioPageModule {}
