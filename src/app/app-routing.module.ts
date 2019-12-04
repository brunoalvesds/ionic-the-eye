import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then( m => m.HomeComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},
  { path: 'login', loadChildren: () => import('./components/login/login.module').then( m => m.LoginModule), data: { authGuardPipe : redirectLoggedInToHome }},
  { path: 'call', loadChildren: () => import('./components/call/call.module').then( m => m.CallComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},
  { path: 'register', loadChildren: () => import('./components/register/register.module').then( m => m.RegisterComponentModule)},  
  { path: 'register-student', loadChildren: () => import('./components/register-student/register-student.module').then( m => m.RegisterStudentComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},  
  { path: 'register-class', loadChildren: () => import('./components/register-class/register-class.module').then( m => m.RegisterClassComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},  
  { path: 'edit-class', loadChildren: () => import('./components/edit-class/edit-class.module').then( m => m.EditClassComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},  
  { path: 'list-classes', loadChildren: () => import('./components/list-classes/list-classes.module').then( m => m.ListClassesComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},  
  { path: 'calendar', loadChildren: () => import('./components/calendar/calendar.module').then( m => m.CalendarComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},  
  { path: 'sucess', loadChildren: () => import('./components/sucess/sucess.module').then( m => m.SucessComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}},  
  { path: 'terms', loadChildren: () => import('./components/terms/terms.module').then( m => m.TermsComponentModule), canActivate: [AngularFireAuthGuard], data : {authGuardPipe : redirectUnauthorizedToHome}}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
