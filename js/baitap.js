/**
 * bài 1 :
 * input nhập 3 số 
 * xử lý 
 * output in ra màng hình ra số theo thứ tự tăng dần vd 3,4,5
 */
function compareNumbers() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
     
    if(num1 > num2){
       var temp = num1;
       num1 = num2;
       num2 = temp;
    }
    if(num2 > num3){
       var temp = num2;
       num2 = num3;
       num3 = temp;
    }
    if(num1 > num2){
       var temp = num1;
       num1 = num2;
       num2 = temp;
    }
     
    document.getElementById("result").innerHTML = num1 + ", " + num2 + ", " + num3;
   }
  document.getElementById("btn-ss").onclick = compareNumbers;
//-----bài2----------//
  function greet() {
    var name = document.getElementById("name").value;
    var message = "";

    if (name == "Ba" || name == "B") {
        message = "Chào Ba! hôm nay bạn khoẻ không =))";
    } else if (name == "Me" || name == "M") {
        message = "Chào Mẹ! hôm nay bạn khoẻ không =))";
    } else if (name == "anhTrai" || name == "A") {
        message = "Chào Anh Trai! hôm nay bạn khoẻ không =))";
    } else if (name == "emGai" || name == "E") {
        message = "Chào Em Gái! hôm nay bạn khoẻ không =))";
    } else {
        message = "Nhập Sai! Vui Lòng Nhập Lại";
    }

    document.getElementById("greetings").innerHTML = message;
}
document.getElementById("btn-gd").onclick = greet;

//-----bài3----------//
function checkOddEven() {
    var oddNumbers = 0;
    var evenNumbers = 0;
    for (var i = 1; i <= 3; i++) {
        var num = parseInt(document.getElementById('num' + i).value);
        if (isNaN(num)) {
            alert('Vui lòng nhập một số hợp lệ!');
            return;
        }
        if (num % 2 == 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
    document.getElementById('result-2').innerHTML = 'Số Lẻ: ' + oddNumbers + '<br>Số chặn: ' + evenNumbers;
}
document.getElementById("btn-cl").onclick = checkOddEven;

//-----bài4----------//
function checkTriangle() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    
    if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        document.getElementById("result-3").innerHTML = "Tam giác là tam giác đều!";
    } 
    else if (a === b || b === c || a === c) {
        document.getElementById("result-3").innerHTML = "Tam giác là cân!";
    } 
    else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        document.getElementById("result-3").innerHTML = "Tam giác vuông góc (định lý Pythagore)!";
    } 
    else {
        document.getElementById("result-3").innerHTML = "Hình tam giác là hình thang!";
    }
    } 
    else {
       document.getElementById("result-3").innerHTML = "Độ dài bạn nhập không tạo thành hình tam giác!  ";
    }
}
document.getElementById("btn-tg").onclick = checkTriangle;