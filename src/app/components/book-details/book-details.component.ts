import { Component, OnInit } from '@angular/core';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  book: Book | undefined;
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }}

  constructor(
    private realTimeDBService: RealTimeDBService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    //hay que hacer esto en el constructor porque si se hiciera todo en el ngOnInit(), obtendríamos el objetivo null debido a que la navegación muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.book = navigation?.extras?.state;
  }

  ngOnInit(): void {

    if (this.book == undefined){
      //asi controlo que nadie se intente colar
      this.router.navigate(["book-list"]);
    }

    console.log(this.book);
  }

}
