import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuardService } from "./services/auth-guard.service";

import { AskResetPasswordComponent } from "./ask-reset-password/ask-reset-password.component";


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'ask-reset-password',
        component: AskResetPasswordComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'register',
        loadChildren: 'app/features/register/register.module#RegisterModule'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    // useHash supports github.io demo page, remove in your app
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }