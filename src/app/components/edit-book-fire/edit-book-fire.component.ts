import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-edit-book-fire',
  templateUrl: './edit-book-fire.component.html',
  styleUrls: ['./edit-book-fire.component.css']
})
export class EditBookFireComponent implements OnInit {

  book: any;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }}
  bookForm: any;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) { 
    //hay que hacer esto en el constructor porque si se hiciera todo en el ngOnInit(), obtendríamos el objetivo null debido a que la navegación muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.book = navigation?.extras?.state;

    // establecemos que el bookForm tenga estos valores por defecto
    this.bookForm = new FormGroup({
      title: new FormControl(this.book.data.title, Validators.required),
      author: new FormControl(this.book.data.author, Validators.required),
      price: new FormControl(this.book.data.price, Validators.required),
      description: new FormControl(this.book.data.description),
      rate: new FormControl(this.book.data.rate),
      imageUrl: new FormControl(this.book.data.imageUrl, Validators.required)
    })
  }

  ngOnInit(): void {
    console.log(this.book);
    console.log(this.bookForm);

    if (this.book == null) {
      //asi controlo que nadie se intente colar
      this.router.navigate(["book-list"]);
    }
  }

  updateBook() {
    //console.log(this.bookForm.valid);

    if (this.bookForm.valid) {
      this.firestoreService.updateBook(this.book.id, this.bookForm.value);
      
      console.log(this.book);
      console.log(this.bookForm);
      
      this.router.navigate(["book-list"]);
    
    } else {
      alert("no se rellenaron todos los campos del formulario revisalo bien")
    }
  }

  isValid(field: string){
    const fieldValidate = this.bookForm.get(field);
    
    return (!fieldValidate.valid && fieldValidate.touched) 
      ? 'is-invalid'
      : fieldValidate.touched 
        ? "is-valid"
        : "";
  }

}
