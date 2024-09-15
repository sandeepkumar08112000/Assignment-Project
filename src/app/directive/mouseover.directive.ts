import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective {
  /* constructor(private ele:ElementRef){}

  @HostListener('mouseover')onMouseOver(){
    this.mouseover('greenyellow');
  }
  @HostListener('mouseout') onMouseOut() {
    this.mouseover('');
  }
  private mouseover(color:string){
    this.ele.nativeElement.style.backgroundColor=color;
  } */

  constructor() { }
  
  @HostBinding('style.backgroundColor') bg: string = "";
  @HostListener('mouseover') mouseover() {
    this.bg = "greenyellow";
  }
  @HostListener('mouseout') mouseout() {
    this.bg = "";
  }
}
