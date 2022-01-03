import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import BookModel from 'src/app/models/book-model';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: any = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }}

  @Output() refreshList: EventEmitter<any> = new EventEmitter();
   
  message = '';

  constructor(
    private realTimeDBService: RealTimeDBService,
    private router: Router,
  ) { 
    //tengo q hacerlo en el constructor porque si lo hago en init me da null debido a que la navegacion muere al crearse
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

    this.message = '';
  }

  deleteBook(): void {
    if (this.book.key) {
      this.realTimeDBService.deleteBook_v2(this.book.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The Book was updated successfully!';
          console.log(this.book);
        })
        .catch(err => console.log(err));
    }

    this.router.navigate(["book-list"]);
  }

}
