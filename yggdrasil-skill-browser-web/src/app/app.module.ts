import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppToolbarComponent} from './app-toolbar/app-toolbar.component';
import {AppComponent} from './app.component';
import {SkillBrowserAmchartsComponent} from './skill-browser-amcharts/skill-browser-amcharts.component';
import {SkillBrowserVisjsComponent} from './skill-browser-visjs/skill-browser-visjs.component';
import {SkillBrowserComponent} from './skill-browser/skill-browser.component';
import { SkillBrowserD3Component } from './skill-browser-d3/skill-browser-d3.component';

@NgModule({
    declarations: [
        AppComponent,
        SkillBrowserComponent,
        AppToolbarComponent,
        SkillBrowserAmchartsComponent,
        SkillBrowserVisjsComponent,
        SkillBrowserD3Component,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatButtonToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
