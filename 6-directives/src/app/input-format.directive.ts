import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {
  //@Input('format') format: string = 'lowercase';
  @Input('appInputFormat') format: string = 'lowercase';
  
  constructor(private el: ElementRef) { }

  // @HostListener('focus') onFocus(){
  //   console.log("on Focus");
  // }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;
    
    if(this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();

    }
  }


}
