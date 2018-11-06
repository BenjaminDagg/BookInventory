import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/Book';
import {Observable} from 'rxjs';

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
  getBooks(): Observable<any> {
    return this.http.get('https://book-inventory.herokuapp.com/books');
  }
}
