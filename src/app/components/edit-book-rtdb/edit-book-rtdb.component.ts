import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';

@Component({
  selector: 'app-edit-book-rtdb',
  templateUrl: './edit-book-rtdb.component.html',
  styleUrls: ['./edit-book-rtdb.component.css']
})
export class EditBookRtdbComponent implements OnInit {

  book: any;
  navigationExtras: NavigationExtras = { // andrés, por qué no tienes esto en tu ActualizarComponent?
    state: {
      value: null
    }}
  bookForm: any;

  constructor(
    private realTimeDBService: RealTimeDBService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    //hay que hacer esto en el constructor porque si se hiciera todo en el ngOnInit(), obtendríamos el objetivo null debido a que la navegación muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.book = navigation?.extras?.state;

    // establecemos que el bookForm tenga estos valores por defecto
    this.bookForm = new FormGroup({
      title: new FormControl(this.book.title, Validators.required),
      author: new FormControl(this.book.author, Validators.required),
      price: new FormControl(this.book.price, Validators.required),
      description: new FormControl(this.book.description),
      rate: new FormControl(this.book.rate),
      imageUrl: new FormControl(this.book.imageUrl, Validators.required)
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

  updateDateAdded(dateAdded: any) {
    // this.dateadded = dateAdded;
    // this.dateadded = this.dateAdapter.format(date,"input"); // ver el archivo "my-date-formats.ts"
  }

  updateDateRead(dateRead: any) {
    // this.dateread = dateRead;
    // this.dateread = this.dateAdapter.format(date,"input"); // ver el archivo "my-date-formats.ts"
  }

  updateBook() {
    console.log(this.bookForm.valid);

    if (this.bookForm.valid) {
      this.realTimeDBService.updateBook(this.book.id, this.bookForm.value);
      
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
