import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { routing } from './app.routing';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [routing]);