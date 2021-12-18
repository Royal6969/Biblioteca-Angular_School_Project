import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(
    private angularFirestore: AngularFirestore
  ) {
  }

  getBooks() {
    return this.angularFirestore.collection('book-list').snapshotChanges();
  }

  addBook(payload: Book) {
    return this.angularFirestore.collection('book-list').add(payload);
  }

  updateBook(bookId: string, payload: Book) {
    return this.angularFirestore.doc('book-list/' + bookId).update(payload);
  }

  deleteBook(bookId: string) {
    return this.angularFirestore.doc('book-list/' + bookId).delete();
  }

}

export interface Book {
  id: string,
  author: string,
  dateadded: string,
  dateread: string,
  description: string,
  imageUrl: string,
  price: number,
  rate: number,
  title: string
}