import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {
    path: '', children: [
    { path: 'pagina', redirectTo:''}
  ]},
  { path: '', component: CuerpoComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },

];
