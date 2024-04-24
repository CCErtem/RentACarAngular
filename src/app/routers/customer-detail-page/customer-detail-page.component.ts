import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomersListComponent } from '../../features/customers/components/customers-list/customers-list.component';

@Component({
  selector: 'app-customer-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    CustomersListComponent
  ],
  templateUrl: './customer-detail-page.component.html',
  styleUrl: './customer-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDetailPageComponent { }
