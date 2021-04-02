import { PagesRoutingModule } from './features/pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesRoutingModule
  },
  // {
  //   path: 'editor',
  //   loadChildren:
  //   () => import('./features/box-model-editor').then( m => m.BoxModelEditorModule)
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
