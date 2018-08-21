import { Component } from '@angular/core';

@Component({
  selector: 'spire-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public open: Boolean;

  constructor() {
    this.open = false;
  }

  public openMenu() {
    this.open = !this.open;
  }

}
