import * as am4core from '@amcharts/amcharts4/core';
import amchartsTheme from '@amcharts/amcharts4/themes/animated';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {LoggerFactory, LogLevel} from '@consdata/logger-api';
import {ConsoleLogAppender} from '@consdata/logger-console';
import {QueryParamsLogLevelProvider} from '@consdata/logger-web';

LoggerFactory.addAppender(ConsoleLogAppender.instance);
LoggerFactory.addLogLevelProvider(QueryParamsLogLevelProvider.instance)
LoggerFactory.setRootLogLevel(LogLevel.INFO);

if (environment.production) {
    enableProdMode();
}

am4core.useTheme(amchartsTheme);

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

const log = LoggerFactory.getLogger('demo');
log.info('Tree changed');
log.debug('Tree changed');
log.trace('Tree changed');
log.error('Tree changed');

