import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {

  @Output() onCancel = new EventEmitter()

  @Input() item: String | undefined


  cancel() {
    this.onCancel.emit()
  }
}
