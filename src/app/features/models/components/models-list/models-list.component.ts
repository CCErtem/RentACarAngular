import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit, OnChanges {


  @Input() brandId: number | null = null;
  @Input() searchBrandName: string | null = null;
  @Input() itemPerPage: number = 10;

  public list!: ModelListItemDto[] | null;
  currentPage: number = 1;
  pages: number[] = [];
  // get filteredList(): ModelListItemDto[] {
  //   return this.list.filter((item) => item.brandId === this.brandId);
  // }

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Component ilk yerleştirildiğinde tetiklenir.
    this.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Her state değiştiğinde tetiklenir.
    if (changes['brandId'] && changes['brandId'].currentValue !== changes['brandId'].previousValue){
      this.currentPage = 1;
      this.getList();
    }
    if (changes['searchBrandName'] && changes['searchBrandName'].currentValue !== changes['searchBrandName'].previousValue){
      this.currentPage = 1;
      this.getList();
    }
    if (changes['itemPerPage'] && changes['itemPerPage'].currentValue !== changes['itemPerPage'].previousValue){
      this.currentPage = 1;
      this.getList();
    
    }

  }

  private getList() {
    this.modelsApiService.getList(this.brandId, this.searchBrandName, this.currentPage, this.itemPerPage)
    .subscribe((response) => {
      this.list = response.body;
      const totalCount = Number(response.headers.get('X-Total-Count'));
      this.pages = Array.from({ length: Math.ceil(totalCount / this.itemPerPage) }, (_, i) => i + 1);
      this.change.markForCheck();
    });
  }

  nextPage() {
    if (this.currentPage < this.pages.length){
          this.currentPage++;
           this.getList();
    }

  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getList();
    }
  }
  
  goToPage(page: number) {
    this.currentPage = page;
    this.getList();
  }
}
