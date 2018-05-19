import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../../../../models/Image';
import {ImagesService} from '../../../../service/images.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../../../../service/config.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css', '../../profile.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: Image;
  @Output() deleteImage = new EventEmitter();

  constructor(
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private router: Router,
    public globalConfig: ConfigService
  ) {
  }

  ngOnInit() {
  }

  removeImage() {
    this.imageService.remove(this.image._id).subscribe(() => {
      this.deleteImage.emit(this.image);
    });
  }

  copyUrl(urlSpan) {
    const url = urlSpan;
    url.select();
    document.execCommand('copy');
  }
}
