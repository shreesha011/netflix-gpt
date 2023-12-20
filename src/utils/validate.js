export const checkvalidData=(email,password) =>
{
    const isEmailValid =/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    // If the email and password is true then no Error
    return null;
}