import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-la-iglesia-universal-del-sol-celestial',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './la-iglesia-universal-del-sol-celestial.component.html',
  styleUrls: ['./la-iglesia-universal-del-sol-celestial.component.scss'],
})
export class LaIglesiaUniversalDelSolCelestialComponent {
  private sub!: Subscription;
  post!: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.post =
        './assets/universo/sociedad/la-iglesia-universal-del-sol-celestial/' +
        params['id'] +
        '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
