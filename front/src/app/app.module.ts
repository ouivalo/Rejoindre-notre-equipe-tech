import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule,} from '@angular/common/http';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TokenInterceptor} from './token.interceptor';
import {GeneralModule} from './general/general.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageService} from 'primeng/api';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    GeneralModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
  ],
  providers: [
    {provide: MessageService},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: APP_BASE_HREF, useValue: '/'}
    {provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
