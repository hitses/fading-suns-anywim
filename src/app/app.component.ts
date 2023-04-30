import { Component } from '@angular/core';
import { FooterComponent } from './common/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
  title = 'fading-suns-anywim';
}
