import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public firstContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg";
  public secondContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg";
  constructor() { }

  ngOnInit() {
  }

  public contactImages: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
      {
        avatar: this.firstContactImage,
        name: "Michael Holz",
        position: "Manager",
      },
      {
        avatar: this.secondContactImage,
        name: "André Stewart",
        position: "Product Manager",
      },
    ];

  public contactInitials: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
      { avatar: "JS", name: "Jason Smith", position: "UX Designer" },
      { avatar: "GP", name: "George Porter", position: "Software Engineer" },
    ];
}
