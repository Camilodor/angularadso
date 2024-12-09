import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PaginaComponent } from './pagina/pagina.component';
import { LoginComponent } from './login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';
import { MercanciaComponent } from './mercancia/mercancia.component';



export const routes: Routes = [
  {path: '', redirectTo: 'sox', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  { path: 'usuarios', component: UsuariosComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'subcategorias', component: SubcategoriasComponent },
    { path: 'mercancia', component: MercanciaComponent },
  {path: 'adso', component: CuerpoComponent,
    children:[
      {path: '', component: PaginaComponent },
     
      { path: 'pagina',component: PaginaComponent},
    ]
  },
  {path:'**',redirectTo: 'adso'},
]
