import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFireComponent } from './components/add-book-fire/add-book-fire.component';
import { AddBookRtdbComponent } from './components/add-book-rtdb/add-book-rtdb.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ClientesV2Component } from './components/clientes-v2/clientes-v2.component';
import { CrearPrestamoFireComponent } from './components/crear-prestamo-fire/crear-prestamo-fire.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DeleteBookFireComponent } from './components/delete-book-fire/delete-book-fire.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { EditBookFireComponent } from './components/edit-book-fire/edit-book-fire.component';
import { EditBookRtdbComponent } from './components/edit-book-rtdb/edit-book-rtdb.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaPrestamosComponent } from './components/lista-prestamos/lista-prestamos.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'book-details',
    component: BookDetailsComponent
  },
  {
    path: 'book-details-rtdb',
    component: BookDetailsComponent
  },
  {
    path: 'add-book-fire',
    component: AddBookFireComponent
  },
  {
    path: 'add-book-rtdb',
    component: AddBookRtdbComponent
  },
  {
    path: 'edit-book-rtdb',
    component: EditBookRtdbComponent
  },
  {
    path: 'edit-book-fire',
    component: EditBookFireComponent
  },
  {
    path: 'delete-book',
    component: DeleteBookComponent
  },
  {
    path: 'delete-book-fire',
    component: DeleteBookFireComponent
  },
  {
    path: 'clientes-v2',
    component: ClientesV2Component
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent
  },
  {
    path: 'customer-details',
    component: CustomerDetailsComponent
  },
  {
    path: 'edit-customer',
    component: EditCustomerComponent
  },
  {
    path: 'delete-customer',
    component: DeleteCustomerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'panel-control',
    component: PanelControlComponent
  },
  {
    path: 'crear-prestamo-fire',
    component: CrearPrestamoFireComponent
  },
  {
    path: 'lista-prestamos',
    component: ListaPrestamosComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
