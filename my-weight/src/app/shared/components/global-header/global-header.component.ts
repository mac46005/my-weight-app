import { Component } from '@angular/core';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'header[global-header]',
  standalone: true,
  imports: [LinkButtonComponent],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css'
})
export class GlobalHeaderComponent {

}
