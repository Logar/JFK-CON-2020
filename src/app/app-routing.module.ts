// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { TicketsComponent } from './tickets/tickets.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { VideoArchiveComponent } from './video-archive/video-archive.component';

const routes: Routes = [
  { 
    path: '', 
    component: SplashComponent,
    data: {
      title: '24th JFK Assassination Conference',
      description: 'Welcome to JFK Lancer\'s 24th annual JFK assassination conference. Each year we honor the legacy of President Kennedy and strive to better understand the facts of his assassination.'
    }
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    data: {
      title: '24th JFK Assassination Conference &raquo; Tickets',
      description: 'Purchase tickets to JFK Lancer\'s 24th annual JFK assassination conference. Ticket prices range from Student tickets at $34.99, Adult tickets at $64.99, and Conference + Digital Download tickets at $119.99.'
    }
  },
  { 
    path: 'speakers',
    component: SpeakersComponent,
    data: {
      title: '24th JFK Assassination Conference &raquo; Speakers',
      description: 'Listen to expert speakers from all over the world at JFK Lancer\'s 24th annual JFK assassination conference. Our primary speakers are for 2020 are Jim DiEugenio, Bill Simpich, Robert Groden.'
    }
  },
  { 
    path: 'speaker/:link',
    component: SpeakerComponent
  },
  { 
    path: 'video-archive',
    component: VideoArchiveComponent,
    canActivate: [AuthGuardLogin],
    data: {
      title: '24th JFK Assassination Conference &raquo; Video Archive',
      description: 'Listen to expert speakers from all over the world at JFK Lancer\'s 24th annual JFK assassination conference. Our primary speakers are for 2020 are Jim DiEugenio, Bill Simpich, Robert Groden.'
    }
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardLogin] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
