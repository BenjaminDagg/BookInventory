import { Component } from '@angular/core';
import {BookService} from '../services/book.service';
import {Observable, of} from 'rxjs';
import {BookListComponent} from '../components/book-list/book-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-inventory';

  constructor(private bookService: BookService) {

  }

  ngOnInit() {


  }
}
