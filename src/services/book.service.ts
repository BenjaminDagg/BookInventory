import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/Book';

@Injectable({
  providedIn:'root',
})

export class BookService {

  constructor(private http:HttpClient) {

  }

  /*
  Fetches all books from api
  returns observable that component subscribes to
   */
  getBooks() {
    //return this.http.get('/books');
    console.log('hi');
  }
}
