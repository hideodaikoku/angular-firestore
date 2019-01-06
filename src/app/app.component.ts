import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;


  title:string;
  content:string;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();

    this.posts = this.postsCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  addPost() {
    this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }


}
interface PostId extends Post { 
  id: string; 
}
