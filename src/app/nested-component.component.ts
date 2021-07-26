import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sm-nested-component',
  templateUrl: './nested-component.component.html',
  styleUrls: ['./nested-component.component.css']
})
export class NestedComponentComponent implements OnInit {
  @Input() valueInput = 'Value Through Input decorator';
  @Output() valueOutputNotify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    debugger;
    this.valueInput = "ngOnChanges changed this value";
  }

  onClick($event): void{
    this.valueOutputNotify.emit('nested compnent se output se ayi hui value');
  }

}
