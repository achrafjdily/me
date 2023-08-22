import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routerOptions: ExtraOptions = {
  // scrollPositionRestoration: "enabled",
  // anchorScrolling: "enabled",
  // scrollOffset: [0, 64]
};

const routes: Routes = [
  {
    path : '',
    component : AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
