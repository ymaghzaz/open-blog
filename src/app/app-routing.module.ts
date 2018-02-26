import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "./services/auth-guard.service";
import { AskResetPasswordComponent } from "./ask-reset-password/ask-reset-password.component";
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/features/blog/blog.module#BlogModule'
    },
    {
        path: 'register',
        loadChildren: 'app/features/register/register.module#RegisterModule'
    },
    {
        path: 'login',
        loadChildren: 'app/features/login/login.module#LoginModule'
    },
    {
        path: 'ask-reset-password',
        component: AskResetPasswordComponent
    },
    {
        path: 'dashboard',
        loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule'
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