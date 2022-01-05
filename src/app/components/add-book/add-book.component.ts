import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirestoreService } from 'src/app/services/firestore.service';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';

// import * as _moment from '@angular/material-moment-adapter';
// import * as _moment from 'moment';
// import { Moment } from 'moment';

// const moment = _moment; // ver el archivo /app/utils/my-date-formats.ts

import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  // Properties for RealTimeDB
  author: string | undefined;
  title: string | undefined;
  price: number | undefined;
  dateadded: Date | undefined;
  dateread: Date | undefined;
  description: string | undefined;
  imageUrl: string | undefined;
  rate: number | undefined; 

  // Properties for Firestore
  book: Book | undefined;
  public bookForm= new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description:new FormControl(''),
    rate: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  });


  constructor(
    private realTimeDBService: RealTimeDBService,
    private firestoreService: FirestoreService,
    private router: Router,
  ) {  }

  ngOnInit(): void {
  }

  /* ------------------------------------------- Methods for RealTimeDB -----------------------------------------------*/

  updateDateAdded(dateAdded: any) {
    this.dateadded = dateAdded;

    // this.dateadded = dateAdded.patchValue({ // ver el archivo /app/utils/my-date-formats.ts
    //     dateadded: moment("01/12/2021", "DD/MM/YYYY")
    // });
  }

  updateDateRead(dateRead: any) {
    this.dateread = dateRead;
  }

  submitAdd() {
    let book = {
      author: this.author,
      title: this.title,
      price: this.price ,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }

    console.log('Book - ',book);
    // this.realTimeDBService.addBook(book); // el método addBook ya está obsoleto al igual que este componente

    this.router.navigate(['book-list']);
  }

  /* ------------------------------------------- Methods for Firestore -----------------------------------------------*/

  createBook() {
    console.log(this.bookForm.valid);

    if (this.bookForm.valid) {
      this.firestoreService.createBook(this.bookForm.value);

      this.router.navigate(['book-list']);
    
    } else {
      alert("recuerda que hay que rellenar los campos, si dejas alguno vacio no valdrá");
    }
  }

}
