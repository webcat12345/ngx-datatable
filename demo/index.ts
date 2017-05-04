import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (ENV === 'production') {
  enableProdMode();
}

import { NgxDataTableDemoModule } from './demo.module';
platformBrowserDynamic().bootstrapModule(NgxDataTableDemoModule);
