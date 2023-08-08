import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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

import { register } from 'swiper/element/bundle';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

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
    StoreModule.forRoot({ appState: appReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
    register();
  }
}
