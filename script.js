function calc(){

    let questionOneNumber = parseFloat(document.getElementById("one").value);
    let questionTwoNumber = parseFloat(document.getElementById("two").value);
    let questionThreeNumber = parseFloat(document.getElementById("three").value);
    let questionFourNumber = parseFloat(document.getElementById("four").value);
    let questionFiveNumer = parseFloat(document.getElementById("five").value);
    let questionSixNumber = parseFloat(document.getElementById("six").value);
    let questionSevenNumber = parseFloat(document.getElementById("seven").value);
    let questionEightNumber = parseFloat(document.getElementById("eight").value);
    let questionNineNumber = parseFloat(document.getElementById("nine").value);
    let questionTenNumber = parseFloat(document.getElementById("ten").value);
    let questionElevenNumber = parseFloat(document.getElementById("eleven").value);


    let percent = ((questionOneNumber + questionTwoNumber + questionThreeNumber + questionFourNumber + questionFiveNumer + questionSixNumber + questionSevenNumber + questionEightNumber + questionNineNumber + questionTenNumber + questionElevenNumber) / 34.5) * 100;
    let resultPercent = (percent.toFixed(2) + " %")

    let sum = (questionOneNumber + questionTwoNumber + questionThreeNumber + questionFourNumber + questionFiveNumer + questionSixNumber + questionSevenNumber + questionEightNumber + questionNineNumber + questionTenNumber + questionElevenNumber);


    if(percent >= 0){
        document.getElementById("show-porcent").innerHTML = resultPercent

    }else{
        document.getElementById("show-porcent").innerHTML = ""
    }

    if(sum >= 0 || sum <= 0){
        document.getElementById("show-sum").innerHTML = sum.toFixed(2);

    }else{
        alert("Preencha todos os campos")
    }
}

