import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapLab';

  constructor(private meta: Meta, private titleService: Title) {
    titleService.setTitle('Hello Bootstrap');
    meta.addTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    });
  }

}
