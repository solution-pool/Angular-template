import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-switch',
  templateUrl: './template-switch.component.html',
  styleUrls: ['./template-switch.component.scss']
})
export class TemplateSwitchComponent implements OnInit, OnChanges {
  @Input() off: Switch;
  @Input() on: Switch;
  @Input() disabled = false;
  @Input() value = 'off';
  @Output() selectionEvent: EventEmitter<Switch> = new EventEmitter<Switch>();
  active: Switch;

  constructor() {
    this.active = this.value === 'off' ? this.off : this.on;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value?.firstChange) {
      this.active = this.value === 'off' ? this.off : this.on;
    }
  }

  isOptionSelected(value: 'off' | 'on') {
    this.value = value;
    this.active = value === 'off' ? this.off : this.on;
    this.selectionEvent.emit(this.active);
  }

}

interface Switch {
  id: number;
  name: string;
}
