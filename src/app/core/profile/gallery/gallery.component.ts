import {Component, OnInit} from '@angular/core';
import {Image} from '../../../models/Image';
import {AuthService} from '../../../service/auth.service';
import {ActivatedRoute} from '@angular/router';
import {ImagesService} from '../../../service/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css', '../profile.component.css']
})
export class GalleryComponent implements OnInit {

  isPrincipalGallery = false;
  private fileToUpload: File;
  images: Image[] = [];

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private imageService: ImagesService
  ) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      this.auth.getPrincipal().subscribe((principal) => {
        this.isPrincipalGallery = principal._id === params.id;
      });
    });
    this.route.queryParams.subscribe((params) => {
      if (params.query) {
        const query = JSON.parse(params.query);
        this.imageService.superfind(query).subscribe((images) => {
          this.images = images;
        });
      }
    });
  }

  addImage(imageForm: any) {
    this.imageService.create(this.fileToUpload).subscribe((image) => {
      this.images.push(image[0]);
    });
  }

  fileChangeEvent(event: any) {
    this.fileToUpload = (<any>event.target).files[0];
  }
}
