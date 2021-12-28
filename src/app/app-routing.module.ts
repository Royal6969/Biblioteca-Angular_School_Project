import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFireComponent } from './components/add-book-fire/add-book-fire.component';
import { AddBookRtdbComponent } from './components/add-book-rtdb/add-book-rtdb.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { DeleteBookFireComponent } from './components/delete-book-fire/delete-book-fire.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { EditBookFireComponent } from './components/edit-book-fire/edit-book-fire.component';
import { EditBookRtdbComponent } from './components/edit-book-rtdb/edit-book-rtdb.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    // path: 'book-details/:id',
    path: 'book-details',
    component: BookDetailsComponent
  },
  {
    // path: 'book-details/:id',
    path: 'book-details-rtdb',
    component: BookDetailsComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent
  },
  {
    path: 'add-book-fire',
    component: AddBookFireComponent
  },
  {
    path: 'add-book-rtdb',
    component: AddBookRtdbComponent
  },
  {
    // path: 'edit-book-rtdb/:id',
    path: 'edit-book-rtdb',
    component: EditBookRtdbComponent
  },
  {
    path: 'edit-book-fire',
    component: EditBookFireComponent
  },
  {
    // path: 'delete-book/:id',
    path: 'delete-book',
    component: DeleteBookComponent
  },
  {
    path: 'delete-book-fire',
    component: DeleteBookFireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
