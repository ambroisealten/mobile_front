import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/components/side-menu.component';

const appRoutes: Routes = [
  { path:'',component: SideMenuComponent},
  //{ path:'skills', loadChildren: './competences/competences.module#CompetencesModule' }, 
  //{ path:'login', loadChildren: './login/login.module#LoginModule' },
  //{ path:'missions', loadChildren: './missions/missions.module#MissionsModule' }, 
  //{ path:'forum', loadChildren: './forum/forum.module#ForumModule' },
  //{ path:'**', redirectTo: '/skills', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: false }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
