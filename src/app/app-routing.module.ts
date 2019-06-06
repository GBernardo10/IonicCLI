import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'list-user', loadChildren: './list-user/list-user.module#ListUserPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'ionic', loadChildren: './pages/ionic/ionic.module#IonicPageModule' },
  { path: 'flutter', loadChildren: './pages/flutter/flutter.module#FlutterPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
