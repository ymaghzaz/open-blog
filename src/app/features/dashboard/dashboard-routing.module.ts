import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';



const routes: Routes = [
    { path: '', component: PublicComponent },
    {
        // path: 'complete_information',
        // component: Step1Component
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }