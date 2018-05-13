import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibraryComponent, BookComponent]
})
export class LibraryModule { }
