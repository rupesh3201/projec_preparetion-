function showCurrentTime()// Higherorder function
{
    console.log(new Date());
}
setInterval(showCurrentTime,1000);//callback
