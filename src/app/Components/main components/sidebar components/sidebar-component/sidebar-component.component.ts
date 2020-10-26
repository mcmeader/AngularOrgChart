import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() mainLink: any
  @Input() subLink: any
  @Input() url: string
  @Input() displayCondition: boolean
  @Output() newUrl = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  updateUrl(newUrl) {
    this.newUrl.emit(newUrl)
  }

}
