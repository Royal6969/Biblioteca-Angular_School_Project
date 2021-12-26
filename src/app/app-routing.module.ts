import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFireComponent } from './components/add-book-fire/add-book-fire.component';
import { AddBookRtdbComponent } from './components/add-book-rtdb/add-book-rtdb.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
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
    path: 'edit-book/:id',
    component: EditBookComponent
  },
  {
    path: 'delete-book/:id',
    component: DeleteBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
