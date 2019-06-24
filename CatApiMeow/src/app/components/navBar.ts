import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: '../templates/navBar.html'
})

class NavBar {
  @Input() public header: string;
}

export { NavBar as NavBarComponent };

