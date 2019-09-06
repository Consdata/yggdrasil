import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppToolbarComponent} from './app-toolbar/app-toolbar.component';
import {AppComponent} from './app.component';
import {SkillBrowserComponent} from './skill-browser/skill-browser.component';

@NgModule({
    declarations: [
        AppComponent,
        SkillBrowserComponent,
        AppToolbarComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
