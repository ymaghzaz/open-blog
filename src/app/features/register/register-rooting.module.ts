import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Step0Component } from "./step0/step0.component";
import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";
import { PaypalComponent } from "./paypal/paypal.component";
import { Step4Component } from "./step4/step4.component";

const routes: Routes = [
  { path: "", component: Step0Component },
  {
    path: "complete_information",
    component: Step1Component
  },
  {
    path: "choose_program",
    component: Step2Component
  },
  {
    path: "payment",
    component: Step3Component
  },
  {
    path: "thanks",
    component: Step4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
