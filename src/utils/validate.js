// ------------Written the checkvalidData function to check the email and Pswd is valid or not-------------

export const checkValidData=(email,password) =>
{
    
    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    //If the email and password is not valid
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    // If the email and password is true then no Error
    return null;
}