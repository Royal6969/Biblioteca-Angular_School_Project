import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  favouriteBooks: any;
  unreadBooks: any;

  public bookList: Book[] = [];

  constructor(
    private realTimeDatabaseService: RealTimeDBService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.realTimeDatabaseService.getFavouriteBooks() // para obtener los libros de la RealTimeDB con un rate > 4
      .subscribe((favBooks) => {
        this.favouriteBooks = favBooks;
        console.log(this.favouriteBooks);
      })

    this.realTimeDatabaseService.getUnreadBooks()
      .subscribe((noReadedBooks) => {
        this.unreadBooks = noReadedBooks;
        console.log('Unread Books', this.unreadBooks);
      })


    this.getBooks(); // para obtener los libros de Firestore
  }

  getBooks(): void {
    this.firestoreService.getBooks()
      .subscribe((res) => {
        this.bookList = res.map((book: any) => {
          return {
            ...book.payload.doc.data(),
            id: book.payload.doc.id
          } as Book;
        });
      });
  }

}
