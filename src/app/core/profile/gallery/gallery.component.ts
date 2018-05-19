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
  private filesToUpload: File[];
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

  addImage(form: any) {
    if (form.form.value.file) {
      this.imageService.createByFile(this.filesToUpload).subscribe((images) => {
        this.images.push(...images);
      });
    } else if (form.form.value.url) {
      for (const url of form.form.value.url.split(',')) {
        if (url) {
          this.imageService.createByUrl(url).subscribe((images) => {
            this.images.push(...images);
          });
        }
      }
    }
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  }

  deleteImage($event) {
    this.images.splice(this.images.indexOf($event), 1);
  }
}
