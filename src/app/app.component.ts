import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postTexts: string[] = [
    'Hallo, ich bin Frederick. Ich bin hier, um neue Freunde zu treffen!',
    'Ich will in den Wald gehen',
    'My Freunde sind nett',
    'Ich habe viele Geschwister',
  ];

  postImages: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
}
