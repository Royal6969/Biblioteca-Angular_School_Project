import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirestoreService } from 'src/app/services/firestore.service';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-add-book-fire',
  templateUrl: './add-book-fire.component.html',
  styleUrls: ['./add-book-fire.component.css']
})
export class AddBookFireComponent implements OnInit {

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
    private firestoreService: FirestoreService,
    private router: Router,
  ) {  }

  ngOnInit(): void {
  }

  /* ------------------------------------------- Methods for Firestore -----------------------------------------------*/

  createBook() {
    if (this.bookForm.valid) {
      this.firestoreService.createBook(this.bookForm.value);
      console.log(this.bookForm);
      this.router.navigate(['book-list']);
    
    } else {
      alert("recuerda que hay que rellenar los campos, si dejas alguno vacio no valdrá");
    }
  }


}
