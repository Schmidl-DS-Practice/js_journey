// Chapter 30
var total = price + (price * taxrate);
var prettytotal = total.toFixed(2); // no decimal places = total.toFixed();
var currencytotal = "$" + prettytotal;
var str = num.toString();
if (str.charAt(str.length - 1) === "5"){
    str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettynum = num.toFixed(2);

// Chapter 31
var rigthnow = new Date();
var datestring = rightnow.toString();
var rightnow = new Date();
var theday = rightnow.getDay(); // is a number
var daynames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theday = now.getDay();
var nameoftoday = daynames[theday];

// Chapter 32
/*
getDay(); is a number
getMonth(); is a number
getDate(); number for day of month
getFullYear(); 4-digit number
getHours(); number 0-23
getMinutes(); number 0-59
getSeconds(); number 0-59
getMilliseconds(); number 0-999
getTime(); number of milliseconds that have elapsed since midnight Jan 1, 1970
*/

// Chapter 33
var today = new Date();
var doomsday = new Date("June 30, 2035");
var mstoday = today.getTime();
var msdoomsday = doomsday.getTime();
var msdiff = msdoomsday - mstoday;
var ddiff = msdiff / (1000 * 60 * 60 * 24);
ddiff = Math.floor(ddiff);

var d = new Date("July 21, 1983 13:25:00");

// Chapter 34
/*
setFullYear(); // pass a number
setMonth(); // pass a number
setDate(); // pass a number
setHours(); // pass a number
setMinutes(); // pass a number
setSeconds(); // pass a number
setMilliseconds(); // pass a number
*/

// Chapter 35
var now = new Date();
var thehr = now.getHours();
var themin = now.getMinutes();
alert("time: " + thehr + ":" + themin);

function telltime(){
    var now = new Date();
    var thehr = now.getHours();
    var themin = now.getMinutes();
    alert("time: " + thehr + ":" + themin);
}

// Chapter 36
function greet_user() {
    alert("Hello");
}

function greet_user(greeting){
    alert(greeting);
}

greet_user("hello there")
var greeting = "hello there";
greet_user(greeting);

var almostamil = 999999;
showbignum(almostamil);

function showmessage(m, string, num){
    alert (m + string + num);
}
var month = "March";
showmessage(month, "'s winning number is ", 23);

// Chapter 37
function calctot(merchtot){
    var ordertot;
    if (merchtot >= 100){
        ordertot = merchtot;
    }
    else if (merchtot < 50.01){
        ordertot = merchtot + 5;
    }
    else {
        ordertot = merchtot + 5 + (0.03 * (merchtot - 50));
    }
    return ordertot;
}
var totaltocharge = calctot(79.99)
alert (calctot(79.00));

var ordertot = merchtot + calctax(merchtot);

var tot = calc(merchtot, calctax(merchtot));

function calc_tot(price){
    return price + calc_ship(price);
}

// Chapter 38
var thesum; // global
function addnumber(){
    thesum = 2 + 2;
}
addnumbers();

function addnumber(){
    var thesum = 2 + 2; // local
}
addnumbers();

// Chapter 39
if (dayofwk === "Sat" || dayofwk === "Sun"){
    alert("whoopee");
}
else if (dayofwk === "Fri"){
alert("tgif");
}
else{
alert("ugh");
}

switch (dayofwk){
case "Sat":
    alert("whoopee");
    break;
case "Sun":
    alert("cool");
    break;
case "Fri":
    alert("tgif");
    break;
default:
    alert("ugh2");
}

// Chapter 40
switch (dayofwk){
case "Sat":
    alert("whoopee");
    break;
case "Sun":
    alert("cool");
    break;
case "Fri":
    alert("tgif");
    break;
default:
    alert("ugh2");
}

// Chapter 41
for (var i = 0; i <= 3; i++){
    alert(i);
}

var i = 0;
while (i <= 3){
    alert(i);
    i++;
}

// Chapter 42
var i = 0;
while (i <=3){
    alert(i);
    i++;
}

var i = 0;
do { // always executes the code block once
    alert(i);
    i++;
} while (i <=3);

// Chapter 43
// when putting js in html use <script></script>
//<script>
function say_hi(){
    alert("hello world");}
function say_bye(){
    alert("bye");}
//</script>
/*
to include a js file in html:
<script> src="whatever.js"></script>
for the same reason that it's a good idea to put js code at the end of the body section, it's a good idea to place the markup that includes js files at the end of the body section.
*/

// Chapter 44
// HTML:
// <!-- -->

// CSS:
// /* */

// JS:
// //
// /* */

// Chapter 45
// inline event handling
// <a href="#" onClick="alert('Hi');">Click</a> // "#" reload the page, use below

// <a href="JavaScript.void(0)" onClick="alert('Hi');">Click</a>

// <a href="JavaScript.void(0)" onClick="var greet='hi'; alert(greet);">Click</a>

// <a href="JavaScript.void(0)" onClick="popup('hi');">Click</a>

// Chapter 46
// <input type="button" value="Cilck" onClick="alert('hello');">
// <a href="summary-page.html"><img src="button-sum.png"></a>
// <img src="button-sum.png" onClick="alert('hello');">
// <img src="button-sum.png" onClick="greeting();">

// Chapter 47
// <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'">
// <h1 onMouseover="alert('');">World Ends</h1>
// <a href="index.html" onMouseover="this.style.color = 'green';">Home Page</a>
// <p id="loris" onMouseover="expand();">Slow Loris: Mouse over for more info</p>
// <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'" onMouseout="src='before-pic.jpg'">

// Chapter 48
// Email:<br>
// <input type="text" size="30" onFocus="this.style/backgroundColor='yellow';">

// Email:<br>
// <input type="text" size="30" onFocus="this.style/backgroundColor='yellow';" onBlur="this.style.backgroundColor='white'">

// Email:<br>
// <input type="text" size="30" onFocus="makefieldyellow();" onBlur="makefieldwhite();">

// Chapter 49
/*
<form>
    Email:
    <input type="text">
    <input type="submit" value="Submit">
</form>

<form>
    Email:
    <input type="text" id="email">
    <input type="submit" value="Submit">
</form>

<form onSubmit="checkAddress('email');">
    Email:
    <input type="text" id="email">
    <input type="submit" value="Submit">
</form>
*/
function checkAddress(fieldId){
    if (document.getElementById(fieldId).value === ""){
        alert("email address requrie");
    }
}

function checkAddress(fieldId){
    var val = document.getElementById(fieldId).value;
    if (val === ""){
        alert("email address requrie");
    }
}

// Chapter 50
/*
<form>
    ZIP:
    <input type="text" id="zip" onBlur="fillCity();"><br>
    City:<br>
    <input type="text" id="city">
</form>
*/
function fillCity(){
    var cityname;
    var zipentered = document.getElementById("zip").value;
    switch(zipentered){
    case "60608":
        cityname = "Chicago";
        break;
    case "68114":
        cityname = "Omaha";
        break;
    case "53212":
        cityname = "Milwaukee";
    }
    document.getElementById("city").value = cityname;
}

// Chapter 51
/*
<p id="slowloris">
text. <a href="javascript:void(0);" onClick="expandLoris();"> Click for more.</a>
*/
function explandLoris(){
    var expanded = "some text";
    document.getElementById("slowLoris").innerHTML = expanded;
}

function placeAlist() {
    var listtoplace = "<ol><li>slow loris</li><li>fast loris</li><li>just-right loris</li></ol>";
    document.getElementById("lorislist").innerHTML = listtoplace;
}

function peekatcontent(){
    var whatsthere = document.getElementById("content").innerHTML;
}

// Chapter 52
// give image id
// add event handler
// use CSS class for invisibility: .hidden {display:none;}
function makeinvisible(){
    document.getElementById("ugly").className="hidden";
}
// .value (form fields)
// .innerHTML (paragraphs, divs, other HTML elements
// .className (replaces any classes assigned in static markup)
function makebig(){
    document.getElementById("p1").className += " big";
}

// Chapter 53
// <img src="" id="" onMouseover="swapPic();>"
function swapPic(){
    document.getElementById("before").src = "after-pic.jpg";
}
// <img .. onMouseover="swapPic(id, 'after-pic.jpg);">
function swapPic(eId, newpic){
    document.getElementById(eId).src = newpic;
}

// Chapter 54
function swapPic(){
    var pic = document.getElementById("before");
    pic.src = "after-pic.jpg";
}

function getAddress(){
    var link = document.getElementById("link1");
    var address = link.href;
}

function enLargeForm(){
    var frm = document.getElementById("f12");
    frm.className = "jumbo";
}

// Chapter 55
function makebig(){
    document.getElementById("p1").style.fontSize = "2em";
}

document.getElementById("pic99").style.cssFloat = "left";
document.getElementById("div9").style.visibility = "hidden";
document.getElementById("mainpic").style.margin = "0 10px 0 10 px";
var m = window.getComputedStyle("mainpic").margin;

// Chapter 56
getElementById(th_id).style.fontSize = "2em";
var par = document.getElementsByTagName("p"); // index into par for each paragraph
var textinmiddleparagraph = par[1].innerHTML;

for (var i = 0; i < par.length; i++){
    par[i].style.fontFamily = "Verdana, Geneva, sans-serif"
}
var pics = document.getElementsByTagName("img");
var divs = document.getElementsByTagName("div");
var ulists = document.getElementsByTagName("ul");

// Chapter 57
var e = document.getElementsById("rules");
var paragraphs = e.getElementsByTagName("p");

var t = document.getElementById("table9");
var cells = t.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++){
    cells[i].style.backgroundColor = "pink";
}

// Chapter 58
// DOM (document object model) > organization chart, created automatically by the browser when your web page loads, for the whole web page.

// Chapter 59
// Learn about parent and children nodes

// Chapter 60


// Chapter 61


// Chapter 62


// Chapter 63


// Chapter 64


// Chapter 65


// Chapter 66


// Chapter 67


// Chapter 68


// Chapter 69


// Chapter 70


// Chapter 71


// Chapter 72


// Chapter 73


// Chapter 74


// Chapter 75


// Chapter 76


// Chapter 77


// Chapter 78


// Chapter 79


// Chapter 80


// Chapter 81


// Chapter 82


// Chapter 83


// Chapter 84


// Chapter 85


// Chapter 86


// Chapter 87


// Chapter 88


// Chapter 89

