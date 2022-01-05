import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import BookModel from 'src/app/models/book-model';

import { RealTimeDBService } from 'src/app/services/real-time-db.service';

@Component({
  selector: 'app-add-book-rtdb',
  templateUrl: './add-book-rtdb.component.html',
  styleUrls: ['./add-book-rtdb.component.css']
})
export class AddBookRtdbComponent implements OnInit {

  book: BookModel = new BookModel();
  submitted = false;

  constructor(
    private realTimeDBService: RealTimeDBService,
    private router: Router,
  ) {  }

  ngOnInit(): void {
  }

  /* ------------------------------------------- Methods for RealTimeDB -----------------------------------------------*/

  saveBook(): void {
    this.realTimeDBService.addBook_v2(this.book).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
      console.log(this.book);
    });
    this.router.navigate(['book-list']);
  }

  newBook(): void {
    this.submitted = false;
    this.book = new BookModel();
    console.log(this.book);
  }

}
