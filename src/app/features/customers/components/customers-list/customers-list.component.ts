import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomersApiService } from '../../service/customers-api.service';
import { CustomerListItemDto } from '../../models/customer-list-item-dto';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersListComponent implements OnInit {
  list: Array<CustomerListItemDto> = [];

  constructor(
    private customersService: CustomersApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.customersService.getList().subscribe((customers) => {
      this.list = customers;
      this.change.markForCheck();
    });
  }
  
 }
