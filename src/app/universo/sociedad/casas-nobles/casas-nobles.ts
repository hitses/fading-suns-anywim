import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-casas-nobles',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './casas-nobles.component.html',
  styleUrls: ['./casas-nobles.component.scss'],
})
export class CasasNoblesComponent {
  private sub!: Subscription;
  post!: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.post =
        './assets/universo/sociedad/casas-nobles/' + params['id'] + '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
