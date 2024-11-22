import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  spidersRef : AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.spidersRef = db.list('pokok')
  }

  getSpiders(){
    return this.spidersRef
  }

  pushSpider(){
    let body={name:"pókica", location:"gardróbszoba", }
    this.spidersRef.push(body)
  }
}
