import { Component, OnInit } from '@angular/core';
import { groupBy, GroupResult } from '@progress/kendo-data-query';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public allowCustom = true;
  public listItems: Array<string> = ["Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",];


  //cascading combobox
  public selectedCategory: any;
  public selectedProduct: any;
  public selectedOrder: any;
  public isDisabledProducts: any;
  public isDisabledOrders = true;

  public dataCategory: Array<{ category: string; categoryId: number }> = [
    { category: "Beverages", categoryId: 1 },
    { category: "Condiments", categoryId: 2 },
    { category: "Seafood", categoryId: 3 },
  ];

  public dataResultProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> | undefined;

  public dataResultOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> | undefined;

  public dataOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> = [
      { orderName: "Cunewalde", orderId: 1, productId: 1 },
      { orderName: "Albuquerque", orderId: 2, productId: 1 },
      { orderName: "Geneve", orderId: 3, productId: 2 },
      { orderName: "Graz", orderId: 4, productId: 2 },
      { orderName: "London", orderId: 5, productId: 3 },
      { orderName: "I. de Margarita", orderId: 6, productId: 3 },
      { orderName: "Barquisimeto", orderId: 7, productId: 4 },
      { orderName: "Brandenburg", orderId: 8, productId: 4 },
      { orderName: "Cunewalde", orderId: 9, productId: 5 },
      { orderName: "Mexico D.F.", orderId: 10, productId: 5 },
      { orderName: "Mexico D.F.", orderId: 11, productId: 6 },
      { orderName: "Rio de Janeiro", orderId: 12, productId: 6 },
    ];

  public dataProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> = [
      { productName: "Chai", productId: 1, categoryId: 1 },
      { productName: "Chang", productId: 2, categoryId: 1 },
      { productName: "Aniseed Syrup", productId: 3, categoryId: 2 },
      { productName: "Genen Shouyu", productId: 4, categoryId: 2 },
      { productName: "Ikura", productId: 5, categoryId: 3 },
      { productName: "Konbu", productId: 6, categoryId: 3 },
    ];

  handleCategoryChange(value: any) {
    //debugger;
    this.selectedCategory = value;
    this.selectedProduct = undefined;
    this.selectedOrder = undefined;

    if (value === undefined) {
      this.isDisabledProducts = true;
      this.dataResultProducts = [];
    } else {
      this.isDisabledProducts = false;
      this.dataResultProducts = this.dataProducts.filter((s) => s.categoryId === value.categoryId);
    }

    this.isDisabledOrders = true;
    this.dataResultOrders = [];
  }

  handleProductChange(value: any) {
    //debugger;
    this.selectedProduct = value;
    this.selectedOrder = undefined;

    if (value === undefined) {
      this.isDisabledOrders = true;
      this.dataResultOrders = [];
    } else {
      this.isDisabledOrders = false;
      this.dataResultOrders = this.dataOrders.filter((s) => s.productId === value.productId);
    }
  }

  handleOrderChange(value: any) {
    //debugger;
    this.selectedOrder = value;
  }
  //

  //grouping
  public data: Array<any> = [
    { name: "Pork", category: "Food", subcategory: "Meat" },
    { name: "Pepper", category: "Food", subcategory: "Vegetables" },
    { name: "Beef", category: "Food", subcategory: "Meat" },
  ];

  public groupedData: GroupResult[] = groupBy(this.data, [{ field: "subcategory" }]);

  //virtulization
  public dataInfo: Array<any> = this.createRandomData(1000);
  public virtual: any = {
    itemHeight: 28,
  };

  public createRandomData(count: number): any[] {
    const firstNames = ["Nancy",
      "Andrew",
      "Janet",
      "Margaret",
      "Steven",
      "Michael",
      "Robert",
      "Anne",
      "Nige",
    ];

    const lastNames = [
      "Davolio",
      "Fuller",
      "Leverling",
      "Peacock",
      "Buchanan",
      "Suyama",
      "King",
      "Callahan",
      "Dodsworth",
      "White",
    ];

    const titles = [
      "Accountant",
      "Vice President, Sales",
      "Sales Representative",
      "Technical Support",
      "Sales Manager",
      "Web Designer",
      "Software Developer",
    ];

    return Array(count).fill({}).map((_, idx) => ({
      id: idx, name: `${idx + 1}${firstNames[Math.floor(Math.random() * firstNames.length)]}
        ${lastNames[Math.floor(Math.random() * lastNames.length)]}`, title: titles[Math.floor(Math.random() * titles.length)],
    }))
  }
}
