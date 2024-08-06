import { Component } from '@angular/core';
import { GlobalFooterComponent } from '../../shared/components/global-footer/global-footer.component';
import { GlobalHeaderComponent } from '../../shared/components/global-header/global-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { StatsComponent } from './stats/stats.component';
import { SectionSummaryComponent } from './section-summary/section-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GlobalFooterComponent, GlobalHeaderComponent, MainHeaderComponent,SectionSummaryComponent,StatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
