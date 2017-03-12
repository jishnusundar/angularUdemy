//ElementRef gives access to host elements, renderes is a service to modify host elements
import {Directive, ElementRef, Renderer} from 'angular2/core'


@Directive({
    selector: '[autoGrow]', //square brackets indicate that "autoGrow" is a property of an element, but not an element by itself
    host: { // for subscribing events raised fromthis element
         '(focus)' : 'onFocus()', //focus is the event name which is in (). This is a key-value-pair
        '(blur)' : 'onBlur()'
}
})
export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {

    }
onFocus() {
this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
}

onBlur() {
this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');

}
}