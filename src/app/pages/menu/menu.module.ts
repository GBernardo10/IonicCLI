import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/menu/main',
    pathMatch:'full'
  },
  {
    path:'',
    component:MenuPage,
    children:[
      {
        path:'main',
        loadChildren:'../main/main.module#MainPageModule'
      },
      {
        path:'ionic',
        loadChildren:'../ionic/ionic.module#IonicPageModule'
      },
      {
        path:'flutter',
        loadChildren:'../flutter/flutter.module#FlutterPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
