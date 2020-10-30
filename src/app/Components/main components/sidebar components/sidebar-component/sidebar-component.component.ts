import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponent {
  @Input() mainLink: any
  @Input() subLink: any
  @Input() url: string
  @Input() displayCondition: boolean
  @Output() newUrl = new EventEmitter<string>()

  updateUrl(newUrl) {
    this.newUrl.emit(newUrl)
  }
}
