import { Component, OnInit } from '@angular/core';
import { RealTimeDBService } from 'src/app/services/real-time-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // favourite books
  favouriteBooks: any;

  constructor(
    private realTimeDatabaseService: RealTimeDBService
  ) { }

  ngOnInit(): void {
    this.realTimeDatabaseService.getFavouriteBooks()
      .subscribe((favBooks) => {
        this.favouriteBooks = favBooks;
        console.log(favBooks);
      })
  }

}
