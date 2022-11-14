import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  @Input() name: string = 'Manischa';
  @Input() text: string = '8 Jahre alt';
  @Input() pic: string = '1.jpg';

  constructor() {}

  ngOnInit(): void {}
}
