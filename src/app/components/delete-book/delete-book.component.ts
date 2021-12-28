import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id: any;
  bookTitle: any;
  bookDescription: any;

  // book: any = null;
  // navigationExtras: NavigationExtras = {
  //   state:{
  //     value: null
  //   }}

  constructor(
    private realTimeDBService: RealTimeDBService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    //tengo q hacerlo en el constructor porque si lo hago en init me da null debido a que la navegacion muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
  //   const navigation = this.router.getCurrentNavigation();
  //   this.book = navigation?.extras?.state;
  }

  ngOnInit(): void {
    // get the book ID
    this.id = this.activatedRoute.snapshot.params['id'];

    this.realTimeDBService.getBookDetails(this.id).valueChanges()
      .subscribe((book) => {
        this.bookTitle = book.title;
        this.bookDescription = book.description;
    });

    // if (this.book == null){
    //   //asi controlo que nadie se intente colar
    //   this.router.navigate(["book-list"]);
    // }
  }

  removeBook() {
    this.realTimeDBService.deleteBook(this.id);
    console.log(this.id);
    this.router.navigate(['']);
  }

  // deleteBook(book: any){
  //   this.realTimeDBService.deleteBook(book.id);
  //   console.log(book);
  //   this.router.navigate(["book-list"]);
  // }

}
