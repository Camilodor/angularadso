import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PadreComponent } from './usuarios/padre/padre.component';
import { PaginaComponent } from './pagina/pagina.component';
import { LoginComponent } from './login/login.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
  {path: '', redirectTo: 'adso', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path: 'adso', component: CuerpoComponent,
    children:[
      {path: '', component: PaginaComponent },
      { path: 'padre',component: PadreComponent,
        children:[
          { path:'prueba',component: PruebaComponent},
      ]
      },
      { path: 'pagina',component: PaginaComponent},
    ]
  },
  {path:'**',redirectTo: 'adso'},
]
