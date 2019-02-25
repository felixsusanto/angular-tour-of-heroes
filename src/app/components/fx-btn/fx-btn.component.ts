import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

interface ComponentConfig {
  oneliner: Boolean;
  callbackOnOptClick: Function;
  optAnchorRight: Boolean;
};

@Component({
  selector: 'app-fx-btn',
  templateUrl: './fx-btn.component.html',
  styleUrls: ['./fx-btn.component.css']
})
export class FxBtnComponent implements OnInit {
  @Input() options: string[] | false = false;
  @Input() minLength: number = 0;
  @Input() configUser: ComponentConfig | {} = {};
  @Output() optClick = new EventEmitter;
  @Output() noOptClick = new EventEmitter;

  state = {
    showOptions: false,
  };

  configState: ComponentConfig = {
    oneliner: false,
    callbackOnOptClick: _.noop,
    optAnchorRight: false
  }

  constructor() { }
  ngOnInit() {
    this.configState = { ...this.configState, ...this.configUser };
  }

  clickHandler(index: number): void {
    if(
      this.configState.callbackOnOptClick !== _.noop &&
      typeof this.configState.callbackOnOptClick === 'function'
    ){
      this.configState.callbackOnOptClick(index);
    } else {
      this.optClick.emit(index);
    }
    this.state.showOptions = false;
  }

  onBlur(): void {
    this.state.showOptions = false;
  }

  onClickBtn(): void {
    if(this.options && this.options.length > this.minLength) {
      this.state.showOptions = !this.state.showOptions;
    } else {
      this.noOptClick.emit(this.options && [...this.options]);
    }
  }
}
