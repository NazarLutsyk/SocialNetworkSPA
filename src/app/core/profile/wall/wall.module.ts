import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [WallComponent, PostComponent]
})
export class WallModule { }
