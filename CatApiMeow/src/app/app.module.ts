import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SearchModule} from './modules/search.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SlickModule} from 'ngx-slick';
import {AppRoutingModule} from './app-routing.module';
import {NavBarComponent} from './components/navBar.component';
import {NavBarModule} from './modules/navBar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
