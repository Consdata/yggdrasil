import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppToolbarComponent} from './app-toolbar/app-toolbar.component';
import {AppComponent} from './app.component';
import {SkillBrowserAmchartsComponent} from './skill-browser-amchart/skill-browser-amcharts.component';
import {SkillBrowserComponent} from './skill-browser/skill-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillBrowserComponent,
    SkillBrowserAmchartsComponent,
    AppToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
