import * as am4core from '@amcharts/amcharts4/core';
import amchartsTheme from '@amcharts/amcharts4/themes/animated';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

am4core.useTheme(amchartsTheme);

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
