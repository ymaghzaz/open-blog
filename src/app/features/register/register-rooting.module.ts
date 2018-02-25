import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step0Component } from './step0/step0.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';

const routes: Routes = [
  { path: '', component: Step0Component },
  {
    path: 'complete_information',
    component: Step1Component
  },
  {
    path: 'choose_program',
    component: Step2Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}