import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  @Input() name: string = 'Manischa';
  @Input() text: string = '8 Jahre alt';
  @Input() pic: string = '1.jpg';
  @Input() canFollow = true;

  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
