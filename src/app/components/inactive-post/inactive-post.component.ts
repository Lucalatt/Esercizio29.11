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
      this.posts = posts.list
      this.inactivePosts()
    })
  }

  ngOnInit(): void {

  }

  inactivePosts() {
    this.posts = this.posts.filter(post => !post.active);
  }


  movePost = (id: number) => {
    fetch('http://localhost:3000/list' + '/' + id, {
      method: 'PATCH',
      body: JSON.stringify({
        active: true,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    location.reload();
  }


  deletePost = (id: number) => {
    fetch('http://localhost:3000/list' + '/' + id, {
      method: 'DELETE',
      body: JSON.stringify({
        active: false,
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8'
      },
    })
    location.reload();
  }

}



