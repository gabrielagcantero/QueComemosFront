import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Asegúrate de que AppModule está siendo importado

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
