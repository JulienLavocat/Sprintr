import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectModule } from './modules/project/project.module';
import { projectReducer } from './features/project.feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      project: projectReducer,
    }),
    LayoutModule,
    ProjectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
