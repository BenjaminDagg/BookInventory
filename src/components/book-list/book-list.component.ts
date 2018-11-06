import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Input} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  query: string;
  books: any[];

  constructor(private bookService:BookService) {
    this.query = "";
    this.books = new Array<any>();
  }

  ngOnInit() {

    var self = this;
    this.bookService.getBooks();
  }



  filterBooks() {

    if (!this.query) {
      return [];
    }

    var search = this.query.toLowerCase();

    return this.books.filter((book) => {
      var title = book.title.toLowerCase();

      return title.indexOf(search) !== -1 ;
    });
  }



}
