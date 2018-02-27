import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { AskResetPasswordComponent } from './ask-reset-password/ask-reset-password.component';
import { FooterComponent } from './footer/footer.component'
import { AppRoutingModule } from './app-routing.module';
import { StyleModule } from './features/commun/style/style.module';
import { FirbaseConnectModule } from './features/commun/firbase-connect/firbase-connect.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './core/index';
import { SharedModule } from './shared/index';
import { ngxMediumModule } from 'ngx-medium-editor';

@NgModule({
  declarations: [
    AppComponent,
    AskResetPasswordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StyleModule,
    FirbaseConnectModule,
    FormsModule,
    ngxMediumModule,
    // core & shared
    CoreModule,
    //SharedModule,

    //dev store
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),

  ],
  providers: [AuthService, AuthGuardService],

  bootstrap: [AppComponent]
})
export class AppModule { }
