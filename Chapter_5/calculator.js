function displayMe (inval)
{
  document.getElementById("display").value =
     document.getElementById("display").value + inval;
}
function calculate()
{
  document.getElementById("display").value =
    eval(document.getElementById("display").value);
}
function clearMe()
{
  document.getElementById("display").value = "";
}

function signswitch()
{
    document.getElementById("display").value =
        document.getElementById("display").value * -1;
}