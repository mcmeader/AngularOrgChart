import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  @Input() id: number

  constructor() { }

  clicked() {
    // this.onClick.emit(id)
  }

  ngOnInit(): void {
  }

}
