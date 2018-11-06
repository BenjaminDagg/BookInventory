import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookService} from '../services/book.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BookListComponent} from '../components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
