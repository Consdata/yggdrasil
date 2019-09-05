import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SkillBrowserComponent} from './skill-browser/skill-browser.component';
import { SkillBrowserD3Component } from './skill-browser-d3/skill-browser-d3.component';
import { SkillBrowserAmchartsComponent } from './skill-browser-amchart/skill-browser-amcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillBrowserComponent,
    SkillBrowserD3Component,
    SkillBrowserAmchartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
