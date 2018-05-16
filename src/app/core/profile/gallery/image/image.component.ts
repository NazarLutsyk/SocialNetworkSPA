import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../../models/Book';
import {Image} from '../../../../models/Image';
import {ImagesService} from '../../../../service/images.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css', '../../profile.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: Image;

  constructor(
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  removeImage() {
    this.imageService.remove(this.image._id).subscribe(() => {
      this.route.parent.params.subscribe((params) => {
        this.router.navigate(
          ['profile', params.id, 'gallery'],
          {
            queryParams: {query: JSON.stringify({author: params.id})},
          }
        );
      });
    });
  }

}
