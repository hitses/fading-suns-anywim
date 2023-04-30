import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Url } from '../url.interface';

@Component({
  selector: 'app-desplegable',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.scss'],
})
export class DesplegableComponent {
  @Input() titulo!: string;
  @Input() urls!: Url[];
  desplegable: boolean = false;

  toogle() {
    this.desplegable = !this.desplegable;
  }
}
