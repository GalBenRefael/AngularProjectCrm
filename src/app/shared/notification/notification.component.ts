import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() showNotification = false;

  @Output() buttonClicked = new EventEmitter<boolean>();

  onButtonClick() {
    this.buttonClicked.emit(false);
  }
}
