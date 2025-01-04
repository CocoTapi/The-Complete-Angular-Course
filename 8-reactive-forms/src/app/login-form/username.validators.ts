import { AbstractControl, ValidationErrors } from "@angular/forms";

// static method: you can access this class without having to create an instance of this user's validator class.
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as String).indexOf(' ') >= 0){
            //check ValidationErrors type in angular website
            return { cannotContainSpace: true };
        }

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'mosh'){
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
        
            }, 2000);
        })
    }
}