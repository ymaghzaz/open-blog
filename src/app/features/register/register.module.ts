import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
import { Step0Component } from "./step0/step0.component";
import { AuthService } from "../../services/auth.service";
import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { RegisterRoutingModule } from "./register-rooting.module";
import { StyleModule } from "../commun/style/style.module";
import { FirbaseConnectModule } from "../commun/firbase-connect/firbase-connect.module";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { registerReducer } from "./register.reducer";
import { RegisterServiceService } from "./services/register-service.service";
import { ManageAuthService } from "../../services/manage-auth.service";
import { SharedModule } from "../../shared/index";
import { ChooseProgramComponent } from "./choose-program/choose-program.component";
import { Step3Component } from "./step3/step3.component";
import { PaypalComponent } from "./paypal/paypal.component";
import { Step4Component } from "./step4/step4.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    StyleModule,
    FirbaseConnectModule,
    SharedModule,
    StoreModule.forFeature("register", {
      register: registerReducer
    })
  ],
  declarations: [
    RegisterComponent,
    Step0Component,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    PaypalComponent,
    ChooseProgramComponent
  ],
  providers: [AuthService, RegisterServiceService, ManageAuthService]
})
export class RegisterModule {}
