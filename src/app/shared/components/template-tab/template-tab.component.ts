import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';

const INIT_OFFSET = 0;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-tab',
  templateUrl: './template-tab.component.html',
  styleUrls: ['./template-tab.component.scss']
})
export class TemplateTabComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() tabs: Tab[];
  @Input() active: Tab;
  @Output() activeChange = new EventEmitter<Tab>();
  @Output() selectionEvent: EventEmitter<Tab> = new EventEmitter<Tab>();
  @ViewChildren('element') tabElements: QueryList<ElementRef>;
  currentOffset = 0;
  displacement = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.changeTabPosition(), 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tabElements) {
      setTimeout(() => this.changeTabPosition(), 0);
    }
  }

  changeTabPosition() {
    if (!this.active) {
      this.active = this.tabs[0];
      this.displacement = INIT_OFFSET;
      this.currentOffset = INIT_OFFSET;
    } else {
      const index = this.tabs.findIndex(tab => tab.id === this.active.id);
      const offsetLeft = this.tabElements.toArray()[index].nativeElement.offsetLeft;
      const offset = offsetLeft === 0 ? offsetLeft : offsetLeft - 5;
      this.displacement = offset - this.currentOffset + this.displacement;
      this.currentOffset = offset;
    }
  }

  isTabSelected(tab: Tab, offsetLeft: number) {
    if (this.active.id !== tab.id) {
      this.selectionEvent.emit(tab);
      const offset = offsetLeft === 0 ? offsetLeft : offsetLeft - 5;
      this.displacement = offset - this.currentOffset + this.displacement;
      this.active = tab;
      this.currentOffset = offset;
    }
  }

}

interface Tab {
  id: number;
  name: string;
}
