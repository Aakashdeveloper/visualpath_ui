import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  /*
  component=> logical /html /css
  module=> Declration
  pipe=> manupulate data on run time
  routing==> mange the pages
  service=> connect to third party/database
  */

