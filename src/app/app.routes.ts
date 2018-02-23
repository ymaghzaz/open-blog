import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { RegisterComponent } from "./register/register.component";
import { AskResetPasswordComponent } from "./ask-reset-password/ask-reset-password.component";
import { Step1Component } from "./register/step1/step1.component";
import { Step2Component } from "./register/step2/step2.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'register/step1',
        component: Step1Component
    },
    {
        path: 'register/step2',
        component: Step2Component
    },
    {
        path: 'ask-reset-password',
        component: AskResetPasswordComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService] 
    }

    
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
 