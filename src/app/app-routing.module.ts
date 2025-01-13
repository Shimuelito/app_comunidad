import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'Registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },  {
    path: 'vista-arrendatario',
    loadChildren: () => import('./pages/vista-arrendatario/vista-arrendatario.module').then( m => m.VistaArrendatarioPageModule)
  },
  {
    path: 'comprobante',
    loadChildren: () => import('./pages/comprobante/comprobante.module').then( m => m.ComprobantePageModule)
  },
  {
    path: 'consultas-arrendatario',
    loadChildren: () => import('./pages/consultas-arrendatario/consultas-arrendatario.module').then( m => m.ConsultasArrendatarioPageModule)
  },
  {
    path: 'vista-administrador',
    loadChildren: () => import('./pages/vista-administrador/vista-administrador.module').then( m => m.VistaAdministradorPageModule)
  },
  {
    path: 'bandeja-admin',
    loadChildren: () => import('./pages/bandeja-admin/bandeja-admin.module').then( m => m.BandejaAdminPageModule)
  },
  {
    path: 'not-admin',
    loadChildren: () => import('./pages/not-admin/not-admin.module').then( m => m.NotAdminPageModule)
  },
  {
    path: 'detalle-admin',
    loadChildren: () => import('./pages/detalle-admin/detalle-admin.module').then( m => m.DetalleAdminPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
