function hello()
{
    console.log('Learning Functions ');
   
}
hello();//named function and Normal function
function send_Email(name)
{
    console.log(`Send email to  ${name}`);

}
function send_Sms(name)
{
    console.log(`Send SMS to  ${name}`);

}

function send_Greatings(name, send_communication)
{
    console.log(`Hello ${name}`);
    console.log(send_communication);

}
send_Greatings('Rupesh',send_Email());
send_Greatings('Harish',send_Email());
send_Greatings('Funtya',send_Email() );
send_Greatings('Akash',send_Sms());
