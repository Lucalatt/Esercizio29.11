import { Component, OnInit } from '@angular/core';
import { getPost, updatePost } from 'src/app/service/post.service';
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
    })

  }

  ngOnInit(): void {
  }

  onInactivePost(id: number, i: number) {
    updatePost({ active: false }, id);
    this.posts.splice(i, 1);
  }

}
