import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getPost } from 'src/app/service/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {
  posts!: Post[]
  constructor() {
    getPost().then(posts => {
      this.posts = posts
      this.inActivePost()
    })

  }

  ngOnInit(): void {
  }

  inActivePost() {
    this.posts = this.posts.filter(post => !post.active)
  }


}

