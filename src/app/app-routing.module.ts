import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'more', loadChildren: './pages/more/more.module#MorePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
