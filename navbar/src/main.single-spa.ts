import 'core-js/es7/reflect';
import { enableProdMode, ApplicationRef, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';

if (environment.production) {
  enableProdMode();
}

// Somehow I have to add bootstrap part again to make the page show the app
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// End

export default singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic().bootstrapModule(AppModule),
  template: '<app-root />',
  Router,
  ApplicationRef,
  NgZone: NgZone,
});
