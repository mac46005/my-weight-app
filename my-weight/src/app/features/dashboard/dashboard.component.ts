import { Component } from '@angular/core';
import { GlobalFooterComponent } from '../../shared/components/global-footer/global-footer.component';
import { GlobalHeaderComponent } from '../../shared/components/global-header/global-header.component';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GlobalHeaderComponent,GlobalFooterComponent, MainHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
