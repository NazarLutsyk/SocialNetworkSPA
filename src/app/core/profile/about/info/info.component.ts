import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() key = '';
  @Input() value = '';
  @Input() canUpdate = false;
  @Output() changeValue = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeProp(key: string, span: HTMLSpanElement, $event) {
    const input = document.createElement('input');
    input.value = span.innerText;
    span.parentNode.replaceChild(input, span);
    input.focus();
    input.onblur = (event) => {
      span.innerText = input.value;
      input.parentNode.replaceChild(span, input);
      this.changeValue.emit({[key.toLowerCase()]: input.value});
    };
  }
}
