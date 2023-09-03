import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { WhiteOutlinedCollapsedLogoComponent } from './layout/logos/white-outlined-collapsed-logo/white-outlined-collapsed-logo.component';
import { WhiteFullTextLogoComponent } from './layout/logos/white-full-text-logo/white-full-text-logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appReducer } from './store/app.reducer';
import { DotsComponent } from './shapes/dots/dots.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

import { SwiperModule } from 'swiper/angular';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { InViewportModule } from 'ng-in-viewport';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TextFieldModule } from '@angular/cdk/text-field';
import { LayoutModule } from '@angular/cdk/layout';

import { IntroductionComponent } from './sections/introduction/introduction.component';
import { DesktopComponent } from './shapes/desktop/desktop.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { EduExpComponent } from './sections/edu-exp/edu-exp.component';
import { TimelineComponent } from './sections/edu-exp/timeline/timeline.component';
import { ExtendedLineLogoComponent } from './layout/logos/extended-line-logo/extended-line-logo.component';
import { MomentDatePipe } from './pipes/moment-date.pipe';
import { TechIconComponent } from './components/tech-icon/tech-icon.component';
import { TechsComponent } from './sections/techs/techs.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { TextLogoComponent } from './shapes/text-logo/text-logo.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({

  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    WhiteOutlinedCollapsedLogoComponent,
    WhiteFullTextLogoComponent,
    DotsComponent,
    SidenavComponent,
    IntroductionComponent,
    DesktopComponent,
    SectionTitleComponent,
    EduExpComponent,
    TimelineComponent,
    ExtendedLineLogoComponent,
    MomentDatePipe,
    TechIconComponent,
    TechsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    TextLogoComponent,
    RightSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    TextFieldModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    NgxPageScrollCoreModule,
    InViewportModule,
    NgHcaptchaModule.forRoot({
      siteKey: environment.hcaptchaKey,
    }),
    StoreModule.forRoot({ appState: appReducer }, {}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), trace: true, traceLimit: 75 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
    // register();
  }
}
