import { Component, Input } from '@angular/core';

@Component({
  selector: 'section[summary]',
  standalone: true,
  imports: [],
  templateUrl: './section-summary.component.html',
  styleUrl: './section-summary.component.css'
})
export class SectionSummaryComponent {
  @Input() title : string = "";
}
