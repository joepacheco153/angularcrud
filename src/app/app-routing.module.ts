import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './componentes/add/add.component';
import { ListComponent } from './componentes/list/list.component';
import { HeaderComponent } from './componentes/template/header/header.component';
import { UpdateComponent } from './componentes/update/update.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'list', component:ListComponent},
  {path: 'add', component:AddComponent},
  {path: 'update', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
