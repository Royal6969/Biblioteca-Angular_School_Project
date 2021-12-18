import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDBService {

  books: AngularFireList<any[]> | undefined; // from firebase
  favouriteBooks: Observable<any> | undefined;
  unreadBooks: Observable<any> | undefined;

  constructor(
    private angularFireDatabse: AngularFireDatabase
  ) { }

  getBooks() {
    this.books = this.angularFireDatabse.list('/books') as AngularFireList<any[]>;

    return this.books;
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
}
