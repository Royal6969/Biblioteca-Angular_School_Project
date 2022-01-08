import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
// import { Timestamp } from 'rxjs/internal/operators/timestamp'; // este precísamente es el que NO nos sirve para esto
import { PrestamosService } from 'src/app/services/prestamos.service';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-lista-prestamos',
  templateUrl: './lista-prestamos.component.html',
  styleUrls: ['./lista-prestamos.component.css']
})
export class ListaPrestamosComponent implements OnInit {

  prestamos: any = [];
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }}

  constructor(
    private router: Router,
    private prestamosServices: PrestamosService
  ) { }

  ngOnInit(): void {
    this.prestamosServices.getPrestamos()
      .subscribe((bookings) => {
        this.prestamos = [];

        bookings.forEach((bookingData: any) => {
          this.prestamos.push({
            data: bookingData.payload.doc.data(),
            id: bookingData.payload.doc.id
          });
        })
        console.log(this.prestamos);
      })
  }

  finalizarPrestamo(prestamo: any) {
    prestamo.data.date_end_booking = Timestamp.now();

    this.prestamosServices.updatePrestamo(prestamo.id, prestamo.data);
    this.router.navigate(['lista-prestamos']); // nos quedamos en el mismo componente pero resfrescándolo
  }

}
