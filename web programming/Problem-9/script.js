var first = prompt("Enter for loop starting value");
var last = prompt("Enter for loop ending value");
let a = parseInt(first);
let b = parseInt(last);
for (var x=a; x<=b; x++) {
    if (x == 0) {
           document.write(x +  " is even");
           document.write("<br>");
           document.write("<br>");
    }
    else if (x % 2 == 0) {
            document.write(x + " is even\n");
            document.write("<br>");   
            document.write("<br>");
    }
    else {
            document.write(x + " is odd\n");
            document.write("<br>");
            document.write("<br>");
    }
}

document.getElementById("for_loop").innerHTML = "For loop from " + first + " to "+last;