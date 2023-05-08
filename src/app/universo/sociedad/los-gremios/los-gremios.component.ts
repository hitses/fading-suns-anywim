import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-los-gremios',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './los-gremios.component.html',
  styleUrls: ['./los-gremios.component.scss'],
})
export class LosGremiosComponent {
  private sub!: Subscription;
  post!: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.post =
        './assets/universo/sociedad/los-gremios/' + params['id'] + '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
