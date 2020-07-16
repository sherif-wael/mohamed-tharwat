import isEmpty from "./isEmpty";

function validateData(data){
    var  error = "";
    if(isEmpty(data.name)){
        error = "please enter your name";
    }
    if(isEmpty(data.tel)){
        error = "please enter your mobile number";
    }
    return {
        isValid: isEmpty(error),
        error
    }
}

export default validateData