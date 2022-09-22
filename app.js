var dateofBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var btnCheck = document.querySelector("#btn-check")
var outputDiv = document.querySelector("#output-div")


function isBirthdayLucky(sum, luckyno){
    if(sum % luckyno === 0){
        outputDiv.innerText = "your Birthday is lucky!!!!🚀🚀"
    }
    else{
        outputDiv.innerText = "Your Birthday is not Lucky...🙁🙁"
    }
}


function calculateSum(dob){
    var sum = 0;
    for(var idx = 0; idx < dob.length; idx++){
        var num = dob.charAt(idx);
        sum = sum + Number(num)
    }
    return(sum)
}


function clickEventHandler() {
    var dateValue = dateofBirth.value;
    var luckyNo = luckyNumber.value;
    if(dateValue === "" && luckyNo === ""){
        outputDiv.innerText = "Please enter both the fields";
    }
    else{
        var dob = dateValue.replaceAll("-","")
        var sumOfDob = calculateSum(dob)
        isBirthdayLucky(sumOfDob, luckyNo)
    }
}


btnCheck.addEventListener("click", clickEventHandler)