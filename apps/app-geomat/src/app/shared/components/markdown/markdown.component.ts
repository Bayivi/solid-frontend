import {MarkdownService} from '../../services/markdown.service';
import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'md,[Md]',
  template: '<ng-content></ng-content>',
  host: {
    class: 'md-rendered'
  },
  styles: []
})
export class MarkdownComponent implements AfterViewInit {
  constructor(
    private _md: MarkdownService,
    private _element: ElementRef,
  ) {
  }

  private _data = '';

  @Input()
  public set data(value: string) {
    this._data = value;
    this.onDataChange(value);
  }

  public ngAfterViewInit(): void {
    if (!this._data) {
      this.processRaw();
    }
  }

  public onDataChange(data: string) {
    if (data) {
      this._element.nativeElement.innerHTML = this._md.compile(data);
    } else {
      this._element.nativeElement.innerHTML = '';
    }
  }

  private processRaw() {
    this.onDataChange(this._element.nativeElement.innerHTML);
  }
}