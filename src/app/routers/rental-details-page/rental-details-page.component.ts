import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RentalsListComponent } from '../../features/rentals/components/rentals-list/rentals-list.component';

@Component({
  selector: 'app-rental-details-page',
  standalone: true,
  imports: [
    CommonModule,
    RentalsListComponent
  ],
  templateUrl: './rental-details-page.component.html',
  styleUrl: './rental-details-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalDetailsPageComponent { }
