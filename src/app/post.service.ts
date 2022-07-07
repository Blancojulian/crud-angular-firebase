import { Injectable } from '@angular/core';

//modulo para la DB con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }

  getPosts(){
    return this.angularFirestore
      .collection('posts')
      .snapshotChanges();
  }
  getPostById(id: string){
    return this.angularFirestore
      .collection('posts')
      .doc(id)
      .valueChanges();
  }
  createPost(post: Post){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('posts')
        .add(post)
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          reject(err);
        });
    })
  }
  updatePost(post: Post, id: string){
    return this.angularFirestore
      .collection('posts')
      .doc(id)
      .update({
        title: post.title,
        author: post.author,
        content: post.content
      });
  }
  deletePost(post: Post){
    return this.angularFirestore
      .collection('posts')
      .doc(post.id)
      .delete();
  }
}
