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
      this.posts = posts.list;
      this.activePosts()
    })

  }

  ngOnInit(): void {

  }

  movePost = (id: number) => {
    fetch('http://localhost:3000/list' + '/' + id, {
      method: 'PATCH',
      body: JSON.stringify({
        active: false,
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8'
      },
    })
    location.reload();
  }

 activePosts() {
    this.posts = this.posts.filter(post => post.active);
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


