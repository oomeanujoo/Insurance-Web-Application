import { Directive, ElementRef, Renderer2, Input, OnInit, EventEmitter } from '@angular/core';
declare var $: any;

@Directive({
  selector: "[d]",
  outputs: [
    "ngModelChange"
],

})
export class DatePickerDirective implements OnInit{
  @Input("d")
  private datepickerOptions: any = {};

  //Emits changes to ngModel
  ngModelChange = new EventEmitter();
  private $el: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
      console.log(el);
      this.$el = $(el.nativeElement);

  }

  ngOnInit() {
    if(typeof this.$el.datapicker != 'undefined'){
      // Initialize the date picker
      this.$el.datepicker(this.datepickerOptions)
          // Angular is watching for the "input" event which is not fired when choosing
          // a date within the datepicker, so watch for the "changeDate" event and manually
          // fire the "input" event so that Angular picks up the change
          // See: angular/modules/@angular/forms/src/directives/default_value_accessor.ts
          .on("change", (event: any) => {
              let inputEvent = new Event("input", { bubbles: true });
              this.renderer.selectRootElement(this.el.nativeElement);
          });

      }
    };

  ngOnDestroy() {
      if(typeof this.$el.datapicker != 'undefined')
        this.$el.datepicker("destroy");
  };
}

