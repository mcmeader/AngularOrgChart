import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'anchor-tag',
  templateUrl: './anchor-tag.component.html',
  styleUrls: ['./anchor-tag.component.scss']
})
export class AnchorTagComponent implements OnInit {
  @Input() class: string
  @Input() link: string
  @Input() text: string
  @Input() id: number
  @Input() click: Function
  @Input() currentUrl: string
  @Output() newUrl = new EventEmitter<string>()

  routeLink: string

  constructor() { }

  ngOnInit(): void {
    this.routeLink = (this.id != null || this.id != undefined) ? this.link + "/" + this.id : this.link
  }

  onClick() {
    this.newUrl.emit(this.link)
  }
}
