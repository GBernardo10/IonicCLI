import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'ionic', loadChildren: './pages/ionic/ionic.module#IonicPageModule' },
  { path: 'flutter', loadChildren: './pages/flutter/flutter.module#FlutterPageModule' },
  { path: 'tab1', loadChildren: '.pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
