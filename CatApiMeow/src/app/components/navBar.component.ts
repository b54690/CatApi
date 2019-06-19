import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: '../templates/navBar.component.html'
})

export class NavBarComponent {
  @Input() public header: string;

}
