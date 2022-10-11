import { Component } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { categories } from './data.categories'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'kendo-app';

  // public gridItems: Observable<GridDataResult> | undefined;
  // public pageSize: number = 10;
  // public skip: number = 0;
  // public sortDescriptor: SortDescriptor[] = [];
  // public filterTerm!: number;

  // constructor(private _productService: ProductService) {
  //   this.loadGridItems();
  // }

  // public pageChange(event: PageChangeEvent): void {
  //   this.skip = event.skip;
  //   this.loadGridItems();
  // }

  // public handleSortChange(descriptor: SortDescriptor[]) {
  //   this.sortDescriptor = descriptor;
  //   this.loadGridItems();
  // }

  // public loadGridItems() {
  //   this.gridItems = this._productService.getProducts(
  //     this.skip,
  //     this.pageSize,
  //     this.sortDescriptor,
  //     this.filterTerm);
  // }

  public dropDownItems = categories;
  public defaultItem = { text: 'Filter by Category', value: null };
}
