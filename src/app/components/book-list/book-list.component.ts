import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

// import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from '@angular/fire/compat/database';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  allBooks: any;

  constructor(
    private realTimeDBService: RealTimeDBService
  ) { }

  ngOnInit(): void {
    this.realTimeDBService.getBooks().valueChanges()
      .subscribe((books) => {
        this.allBooks = books;
      })
  }

}
