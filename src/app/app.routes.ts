import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PadreComponent } from './usuarios/padre/padre.component';
import { PaginaComponent } from './pagina/pagina.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: 'adso', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path: 'adso', component: CuerpoComponent,
    children:[
      {path: '', component: PaginaComponent},
      { path: 'padre',component: PadreComponent},
      { path: 'pagina',component: PaginaComponent},
    ]
  },
  
  
]
