import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { BodywebComponent } from '../bodyweb/bodyweb.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    BodywebComponent
    
  ],
  exports:[
    HomeComponent,
    MenuNavComponent,
    BodywebComponent
  ],
  imports: [
    CommonModule
    
  ]
})
export class HomeModule { }
