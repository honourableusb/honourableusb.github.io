import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
                        { path: '', loadChildren: () => import('./home/home.module').then(m=>m.HomeModule) },
                        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
                        { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
