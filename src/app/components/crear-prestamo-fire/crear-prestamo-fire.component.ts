import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteV2Service } from 'src/app/services/cliente-v2.service';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-crear-prestamo-fire',
  templateUrl: './crear-prestamo-fire.component.html',
  styleUrls: ['./crear-prestamo-fire.component.css']
})
export class CrearPrestamoFireComponent implements OnInit {

  book: any;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }}

  public bookingForm: any;
  customers: any;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private clientesV2Service: ClienteV2Service,
    private prestamoService: PrestamosService
  ) { 
    //hay que hacer esto en el constructor porque si se hiciera todo en el ngOnInit(), obtendríamos el objetivo null debido a que la navegación muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.book = navigation?.extras?.state;

    this.bookingForm = new FormGroup({
      customer: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    console.log(this.book);

    if (this.book == null) {
      //asi controlo que nadie se intente colar
      this.router.navigate(["lista-prestamos"]);
    }

    this.getAllCustomers();


  }

  getAllCustomers(): void {
    this.clientesV2Service.getCustomers()
      .subscribe((res) => {
        this.customers = res.map((customer: any) => {
          return {
            data: customer.payload.doc.data(),
            id: customer.payload.doc.id
          } as Cliente;
        });
        //console.log(this.customers);
      });
  }

  generateBooking() {
    let prestamo: any = {};
    let formData: any = null;

    if(this.bookingForm.valid) {
      formData = this.bookingForm.value.customer;
      prestamo.customer_id = formData.id;
      prestamo.customer_name = formData.data.name;
      prestamo.book_id = this.book.id;
      prestamo.book_title = this.book.data.title;
      prestamo.date_booking = Timestamp.now();

      this.prestamoService.createPrestamo(prestamo);
      this.router.navigate(["lista-prestamos"]);

      console.log(prestamo);
    }
  }

}
