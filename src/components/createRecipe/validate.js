export function validate(input) {
    let errors = {};
    if (!input.name ) {
        errors.name = "Name is required";
    }
    if(input.name.length < 3){
        errors.name = 'The name must contain at least 5 characters'
    }

    if (input.summary.length < 10) {
        errors.summary = "the Summary must contain at least 10 characters";
    }

    if (!input.healthScore) {
        errors.healthScore = "Health Score is required";
    }

    if(!input.dietsTypes){
        errors.dietsTypes = "Diet Types is required"
    }

    return errors;
}
