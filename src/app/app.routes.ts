import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PadreComponent } from './usuarios/padre/padre.component';
import { PaginaComponent } from './pagina/pagina.component';

export const routes: Routes = [
  { path: '', component: CuerpoComponent},
  { path: 'padre',component: PadreComponent}
  
]
