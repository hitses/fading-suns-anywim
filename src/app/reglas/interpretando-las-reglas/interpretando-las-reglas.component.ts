import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-interpretando-las-reglas',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './interpretando-las-reglas.component.html',
  styleUrls: ['./interpretando-las-reglas.component.scss'],
})
export class InterpretandoLasReglasComponent {
  private sub!: Subscription;
  post!: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.post =
        './assets/reglas/interpretando-las-reglas/' + params['id'] + '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
