import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-suggestions',
  templateUrl: './friend-suggestions.component.html',
  styleUrls: ['./friend-suggestions.component.scss'],
})
export class FriendSuggestionsComponent implements OnInit {
  names: string[] = ['Gen', 'Yoshi', 'Howarang', 'Anna'];
  texts: string[] = [
    '3 Jahre alt',
    '5 Monate alt',
    '2 Jahre alt',
    'gester geboren',
  ];
  pics: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  constructor() {}

  ngOnInit(): void {}
}
