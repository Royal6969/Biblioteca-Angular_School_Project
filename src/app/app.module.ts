import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { RealTimeDBService } from './services/real-time-db.service';
import { FirestoreService } from './services/firestore.service';
import { AddBookRtdbComponent } from './components/add-book-rtdb/add-book-rtdb.component';
import { AddBookFireComponent } from './components/add-book-fire/add-book-fire.component';
import { EditBookFireComponent } from './components/edit-book-fire/edit-book-fire.component';
import { EditBookRtdbComponent } from './components/edit-book-rtdb/edit-book-rtdb.component';
import { DeleteBookFireComponent } from './components/delete-book-fire/delete-book-fire.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientesV2Component } from './components/clientes-v2/clientes-v2.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookDetailsComponent,
    AddBookComponent,
    AddBookRtdbComponent,
    AddBookFireComponent,
    EditBookFireComponent,
    EditBookRtdbComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent,
    DeleteBookFireComponent,
    ClientesV2Component,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'library'), // optionally provide a custom firebase application name
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [
    RealTimeDBService,
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
