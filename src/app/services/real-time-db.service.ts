import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { Book } from '../interfaces/book';
import BookModel from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDBService {

  private dbPath = '/books';

  books: AngularFireList<any[]> | undefined; // from firebase
  booksRef: AngularFireList<BookModel>;
  favouriteBooks: Observable<any> | undefined;
  unreadBooks: Observable<any> | undefined;
  bookDetails: AngularFireObject<any> | undefined; // from firebase

  constructor(
    private angularFireDatabse: AngularFireDatabase
  ) { 
    this.booksRef = angularFireDatabse.list(this.dbPath);
  }

  // getBooks() {
  //   this.books = this.angularFireDatabse.list('/books') as AngularFireList<Book[]>;

  //   return this.books;
  // }

  getBooks_v2(): AngularFireList<BookModel> {
    return this.booksRef;
  }

  getFavouriteBooks() {
    this.favouriteBooks = this.angularFireDatabse.list('/books')
      .valueChanges().pipe(map((books) => {
        const topRatedBooks = books.filter((item: any) => item.rate > 4);

        return topRatedBooks;
      }))
      
      return this.favouriteBooks;
  }

  getUnreadBooks() {
    this.unreadBooks = this.angularFireDatabse.list('/books')
      .valueChanges().pipe(map((books) => {
        const unreadBooks = books.filter((item: any) => item.dateread == null);

        return unreadBooks;
      }))

      return this.unreadBooks;
  }

  // getBookDetails(id: any) {
  //   this.bookDetails = this.angularFireDatabse.object('/books/' + id) as AngularFireObject<Book>;

  //   return this.bookDetails;
  // }

  // addBook(bookDetails: any) {
  //   var filteredBook = JSON.parse(JSON.stringify(bookDetails)); // removes the undefined fields

  //   console.log('Filtered Book - ',filteredBook);
  //   return this.books?.push(filteredBook);
  // }

  addBook_v2(book: Book): any {
    return this.booksRef.push(book);
  }

  // formatDate(date: Date): string { // ver el archivo /app/utils/my-date-formats.ts
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();

  //   return `${year}-${month}-${day}`;
  // }

  updateBook(id: any, bookDetails: any) { // método de updateBook() obsoleto
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); // removes the undefined fields

    return this.books?.update(id, filteredBook);
  }

  updateBook_v2(key: string, value: any): Promise<void> {
    return this.booksRef.update(key, value);
  }

  deleteBook_v2(key: string): Promise<void> {
    return this.booksRef.remove(key);
  }
  
}
