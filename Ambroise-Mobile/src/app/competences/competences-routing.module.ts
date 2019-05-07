import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabbarCompetenceComponent } from './components/tabbar-competence/tabbar-competence.component';

const routes: Routes = [
  {path: '', component: TabbarCompetenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetencesRoutingModule { }
