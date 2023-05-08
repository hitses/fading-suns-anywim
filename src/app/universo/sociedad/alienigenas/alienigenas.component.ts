import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-alienigenas',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './alienigenas.component.html',
  styleUrls: ['./alienigenas.component.scss'],
})
export class AlienigenasComponent {
  private sub!: Subscription;
  post!: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.post =
        './assets/universo/sociedad/alienigenas/' + params['id'] + '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
