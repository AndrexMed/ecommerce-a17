import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
