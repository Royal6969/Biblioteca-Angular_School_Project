import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-delete-book-fire',
  templateUrl: './delete-book-fire.component.html',
  styleUrls: ['./delete-book-fire.component.css']
})
export class DeleteBookFireComponent implements OnInit {

  book: any = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }}

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) { 
    //tengo que hacerlo en el constructor porque si lo hago en init me da null debido a que la navegacion muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.book = navigation?.extras?.state;
  }

  ngOnInit(): void {
    console.log(this.book);

    if (this.book == null){
      //asi controlo que nadie se intente colar
      this.router.navigate(["book-list"]);
    }
  }

  deleteBook(book: any){
    this.firestoreService.deleteBook(book.id);
    console.log(book);
    this.router.navigate(["book-list"]);
  }

}
