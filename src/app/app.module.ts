// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

// Services
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppState } from './app.state';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { SEOService } from './services/seo.service';
import { SpeakerService } from './services/speaker.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SplashComponent } from './splash/splash.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CountDownComponent } from './shared/countdown/countdown.component';
import { TicketButtonComponent } from './ticket-button/ticket-button.component';
import { FooterComponent } from './footer/footer.component';
import { TicketsComponent } from './tickets/tickets.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { UnauthNavComponent } from './unauth-nav/unauth-nav.component';

// Pipes
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { SpeakerComponent } from './speaker/speaker.component';
import { ToastComponent } from './shared/toast/toast.component';
import { LoadingComponent } from './shared/loading/loading.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SplashComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    CountDownComponent,
    TicketButtonComponent,
    FooterComponent,
    TicketsComponent,
    SpeakersComponent,
    UnauthNavComponent,
    SafeHtmlPipe,
    SpeakerComponent,
    ToastComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    }),
    HomeModule.forRoot()
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppState,
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    UserService,
    SEOService,
    SpeakerService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
