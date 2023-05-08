import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-sociedad',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './sociedad.component.html',
  styleUrls: ['./sociedad.component.scss'],
})
export class SociedadComponent {
  private sub!: Subscription;
  post!: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.post = './assets/universo/sociedad/' + params['id'] + '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
