import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  @Input() name = 'marwan';
  @Output() newName = new EventEmitter<string>();

  addNames(value: string) {
    this.newName.emit(value);
  }
}
