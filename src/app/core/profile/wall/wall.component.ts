import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../../../models/Post';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css', '../profile.component.css']
})
export class WallComponent implements OnInit {

  isPrincipalWall = false;
  posts: any[] = [];

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      this.auth.getPrincipal().subscribe((principal) => {
        this.isPrincipalWall = principal._id === params.id;
      });
    });
    this.route.queryParams.subscribe((params) => {
      if (params.query) {
        const query = JSON.parse(params.query);
        const populate = ['images', 'books'];
        this.postService.superfind(query, populate).subscribe((posts) => {
          this.posts = posts;
        });
      }
    });
  }

  createPost(form: NgForm) {
    this.postService.create(form.form.value).subscribe((post) => {
      this.posts.push(post);
    });
  }
}
