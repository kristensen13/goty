import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

@NgModule({
  declarations: [GraficoBarraHorizontalComponent, NavbarComponent],
  exports: [GraficoBarraHorizontalComponent, NavbarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule,
  ],
})
export class ComponentsModule {}
