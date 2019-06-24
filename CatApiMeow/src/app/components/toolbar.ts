import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: '../templates/toolbar.html'
})

class Toolbar {
  @Input() public header: string;
}

export { Toolbar as ToolbarComponent };

