import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ManageAuthService } from '../../services/manage-auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService, ManageAuthService]
})
export class LoginModule { }
