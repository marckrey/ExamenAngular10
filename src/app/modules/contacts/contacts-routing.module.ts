import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsModule } from './contacts.module';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
