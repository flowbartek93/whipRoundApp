import { Directive, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS, FormGroup } from "@angular/forms";

@Directive({
  selector: "[ProvidePriceValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: providePrice,
      multi: true
    }
  ]
})
export class providePrice implements Validator {
  priceValue: number;

  validate(group: AbstractControl): ValidationErrors | null {
    const controls = (group as FormGroup).controls;

    if (controls.price?.value === undefined && controls.pricein?.value === undefined) {
      console.log("puste kontrolki");

      return { noPricesProvdied: true };
    } else {
      console.log("no error in validator");
      return null;
    }
  }
}
