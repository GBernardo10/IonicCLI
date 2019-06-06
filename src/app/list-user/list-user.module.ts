import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListUserPage } from './list-user.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: ListUserPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path:'', component:ListUserPage}])
  ],
  declarations: [ListUserPage]
})
export class ListUserPageModule {}
