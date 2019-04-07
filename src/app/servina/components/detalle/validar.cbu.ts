import { FormGroup } from '@angular/forms';

export function ValidarCbu(cbu: string) {
    return (formGroup: FormGroup) => {
        const cbuControl = formGroup.controls[cbu];

        if (cbuControl.errors && !cbuControl.errors.ValidarCbu) {
            // return if another validator has already found an error
            return;
        }
        if (cbuControl.value === 10 ) {
            cbuControl.setErrors({ validarCbu: true });
        } else {
            cbuControl.setErrors(null);
        }
    }
}