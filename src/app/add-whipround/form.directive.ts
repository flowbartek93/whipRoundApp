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
  validate(group: AbstractControl): ValidationErrors | null {
    const controls = (group as FormGroup).controls;

    console.log(controls);

    if (controls.price?.value === "" && controls.pricein?.value === "") {
      console.log("puste kontrolki");
      return { noPricesProvdied: true };
    } else {
      return null;
    }
  }
}
