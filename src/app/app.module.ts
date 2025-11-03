import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent, HomePageComponent, LoginComponent, RegisterComponent } from './components';
import { NavbarComponent } from './shared';
import { StrongPasswordDirective } from './directives';

import {TranslateModule} from '@ngx-translate/core';
import {provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    StrongPasswordDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    DragDropModule,
    TranslateModule.forRoot({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
