import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';
import { SubNavComponent } from '../sub-nav/sub-nav.component';
import { VideoArchiveComponent } from '../video-archive/video-archive.component';

import { SEOService } from '../services/seo.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HomeComponent,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    SubNavComponent,
    VideoArchiveComponent
  ]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders<HomeModule> {
    return {
      ngModule: HomeModule,
      providers: [SEOService]
    }
  }
}
