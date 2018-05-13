import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GalleryComponent, ImageComponent]
})
export class GalleryModule { }
