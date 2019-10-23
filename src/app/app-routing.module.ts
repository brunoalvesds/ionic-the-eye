import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then( m => m.HomeComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},
  { path: 'login', loadChildren: () => import('./components/login/login.module').then( m => m.LoginModule), data: { authGuardPipe : redirectLoggedInToHome }}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
