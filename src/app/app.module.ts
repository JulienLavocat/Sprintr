import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { boardReducer } from './features/board.feature';
import { projectReducer } from './features/project.feature';
import { GraphQLModule } from './graphql.module';
import { ProjectPickerModule } from './modules/project-picker/project-picker.module';
import { ProjectModule } from './modules/project/project.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      project: projectReducer,
      board: boardReducer,
    }),
    LayoutModule,
    ProjectModule,
    GraphQLModule,
    HttpClientModule,
    ProjectPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
