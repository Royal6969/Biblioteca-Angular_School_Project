import { Component, OnInit } from '@angular/core';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { AngularFireObject } from '@angular/fire/compat/database';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  book: any | undefined;
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }}
  currentNavigate: any;

  constructor(
    private realTimeDBService: RealTimeDBService,
    private firestoreService: FirestoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
}
