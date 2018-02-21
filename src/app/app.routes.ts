import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuardService } from "./services/auth-guard.service";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService] 
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
 