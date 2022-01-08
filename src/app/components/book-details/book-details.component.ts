import { Component, OnInit } from '@angular/core';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PrestamosService } from 'src/app/services/prestamos.service';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  book: any | undefined;
  prestamos: any | undefined;
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }}
  currentNavigate: any;

  constructor(
    private realTimeDBService: RealTimeDBService,
    private firestoreService: FirestoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private prestamosService: PrestamosService
  ) { 
    //hay que hacer esto en el constructor porque si se hiciera todo en el ngOnInit(), obtendríamos el objetivo null debido a que la navegación muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.book = navigation?.extras?.state;

    this.currentNavigate = navigation?.finalUrl?.root.children.primary.segments[0].path;
  }

  ngOnInit(): void {

    if (this.book == undefined){
      //asi controlo que nadie se intente colar
      this.router.navigate(["book-list"]);
    }

    console.log(this.book);

    this.prestamosService.getPrestamos().subscribe((prestamosSnapshot) => {
      this.prestamos = [];
      prestamosSnapshot.forEach((prestamoData: any) => {
        this.prestamos.push({
          data: prestamoData.payload.doc.data(),
          id: prestamoData.payload.doc.id
        });
      })
      this.fillBookBooking();
    })
  }

  esFirestore() {
    if (this.currentNavigate == "book-details") {
      return true;
    }
    else if (this.currentNavigate == "book-details-rtdb") {
      return false;
    }

    // por si acaso
    return null;
  }

  getBookEditFire(book: any){
    this.navigationExtras.state = book;
    this.router.navigate(["edit-book-fire"], this.navigationExtras)
  }

  getBookEditRTDB(book: any){
    this.navigationExtras.state = book;
    this.router.navigate(["edit-book-rtdb"], this.navigationExtras)
  }

  getBookDeleteFire(book: any){
    this.navigationExtras.state = book;
    this.router.navigate(["delete-book-fire"], this.navigationExtras)
  }

  getBookDeleteRTDB(book: any){
    this.navigationExtras.state = book;
    this.router.navigate(["delete-book"], this.navigationExtras)
  }

  getBookBookingFire(book: any){
    this.navigationExtras.state = book;
    this.router.navigate(["crear-prestamo-fire"], this.navigationExtras)

    console.log(this.navigationExtras.state);
  }

  fillBookBooking() {
    for(let j = 0; j < this.prestamos.length; j++) {
      if(this.book.id == this.prestamos[j].data.book_id && this.prestamos[j].data.date_end_booking == null) {
        this.book.prestamo = this.prestamos[j];
      }
    }
  }

  finalizarPrestamo(prestamo: any) {
    prestamo.data.date_end_booking = Timestamp.now();

    this.prestamosService.updatePrestamo(prestamo.id, prestamo.data);
    this.router.navigate(['lista-prestamos']); // nos quedamos en el mismo componente pero resfrescándolo
  }

  // getBookBookingRTDB(book: any){
  //   this.navigationExtras.state = book;
  //   this.router.navigate(["crear-prestamo"], this.navigationExtras)
  // }
}
