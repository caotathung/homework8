// may tinh

a = prompt(" Enter a  calculation (+, -, *, /)")
let b = Number(prompt("Enter a number to check"))
let c = Number(prompt("Enter a number to check"))
let result = ""
if ( a == "+" ) {
    result = b + c
}
else if ( a == "-" ) {
    result = b - c
}
else if ( a == "*" ) {
    result = b * c
}
else if ( a == "/" ) {
    result = b / c
}



alert(result)


/// tim so nguyen to
let n = prompt ("nhap so") 
let isPerime =true;
if (n < 2){
    isPerime = false;
}
else{
    // lặp từ 2 tới n-1
    for (var i = 2; i < n-1; i++)
    {
        if (n % i == 0){
            isPerime = false;
            break;
        }
    }
}

if (isPerime == true){
    alert(n + " là số nguyên tố ");
}
else{
    alert(n + " không phải là số nguyên tố ");
}
