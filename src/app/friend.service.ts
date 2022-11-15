import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  names: string[] = [];
  texts: string[] = [];
  pics: string[] = [];

  constructor() {}

  addFriend(name: string, text: string, pic: string) {
    this.names.push(name);
    this.texts.push(text);
    this.pics.push(pic);
  }
}
