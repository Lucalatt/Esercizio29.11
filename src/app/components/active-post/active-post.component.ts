import { Component, OnInit } from '@angular/core';
import { getPost } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {
  posts!: Post[]
  constructor() {
    getPost().then(posts => {
      this.posts = posts
      this.activePost()
    })

  }

  ngOnInit(): void {
  }

  activePost() {
    this.posts = this.posts.filter(post => post.active)
  }

}
