import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SkillBrowserAmchartsComponent} from './skill-browser-amchart/skill-browser-amcharts.component';
import {SkillBrowserD3Component} from './skill-browser-d3/skill-browser-d3.component';
import {SkillBrowserComponent} from './skill-browser/skill-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillBrowserComponent,
    SkillBrowserD3Component,
    SkillBrowserAmchartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
