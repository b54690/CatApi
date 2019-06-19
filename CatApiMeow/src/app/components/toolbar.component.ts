import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: '../templates/toolbar.component.html'
})

export class ToolbarComponent {
  @Input() public header: string;

}
