import { ContactListComponent } from './contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/contact-list', pathMatch: 'full' },
  {path: 'contact-list', component: ContactListComponent},
  {path: 'contact-list/new', component: ContactEditComponent},
  {path: 'contact-list/:id', component: ContactEditComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
