function calc() {

    let questionOneNumber = parseFloat(document.getElementById("one").value);
    let questionTwoNumber = parseFloat(document.getElementById("two").value);
    let questionThreeNumber = parseFloat(document.getElementById("three").value);
    let questionFourNumber = parseFloat(document.getElementById("four").value);
    let questionFiveNumber = parseFloat(document.getElementById("five").value);
    let questionSixNumber = parseFloat(document.getElementById("six").value);
    let questionSevenNumber = parseFloat(document.getElementById("seven").value);
    let questionEightNumber = parseFloat(document.getElementById("eight").value);
    let questionNineNumber = parseFloat(document.getElementById("nine").value);
    let questionTenNumber = parseFloat(document.getElementById("ten").value);
    let questionElevenNumber = parseFloat(document.getElementById("eleven").value);

    let percent = ((questionOneNumber + questionTwoNumber + questionThreeNumber + questionFourNumber + questionFiveNumber + questionSixNumber + questionSevenNumber + questionEightNumber + questionNineNumber + questionTenNumber + questionElevenNumber) / 39.5) * 100;
    let resultPercent = (percent.toFixed(0) + " %")

    let sum = (questionOneNumber + questionTwoNumber + questionThreeNumber + questionFourNumber + questionFiveNumber + questionSixNumber + questionSevenNumber + questionEightNumber + questionNineNumber + questionTenNumber + questionElevenNumber);


    if (percent >= 0) {
        document.getElementById("show-porcent").innerHTML = resultPercent

    } else {
        document.getElementById("show-porcent").innerHTML = ""
    }

    if (sum >= 0 || sum <= 0) {
        document.getElementById("show-sum").innerHTML = sum.toFixed(2);

    } else {
        alert("Preencha todos os campos")
    }

    if(percent >= 70){
        document.getElementById('register').style.display = 'inline'
        alert('Seu relatório está pronto para ser registrado na avaliação oficial do IN Delivery, Clique no botão "Registrar"');
    }else{
        document.getElementById('register').style.display = 'none'
        alert('Sua nota foi abaixo de 70%, revise as questões destacadas para aumentar sua nota final');
    }

    let oneAlert = document.getElementById('oneAlert');
    let twoAlert = document.getElementById('twoAlert');
    let threeAlert = document.getElementById('threeAlert');
    let fourAlert = document.getElementById('fourAlert');
    let fiveAlert = document.getElementById('fiveAlert');
    let sixAlert = document.getElementById('sixAlert');
    let sevenAlert = document.getElementById('sevenAlert');
    let eightAlert = document.getElementById('eightAlert');
    let nineAlert = document.getElementById('nineAlert');
    let tenAlert = document.getElementById('tenAlert');
    let elevenAlert = document.getElementById('elevenAlert');

    if (questionOneNumber < 0) {
        oneAlert.style.display = 'block';
    } else {
        oneAlert.style.display = 'none';
    }

    if (questionTwoNumber < 0) {
        twoAlert.style.display = 'block';
    } else {
        twoAlert.style.display = 'none';
    }

    if (questionThreeNumber < 0) {
        threeAlert.style.display = 'block';
    } else {
        threeAlert.style.display = 'none';
    }

    if (questionFourNumber <= 0) {
        fourAlert.style.display = 'block';
    } else {
        fourAlert.style.display = 'none';
    }

    if (questionFiveNumber < 0) {
        fiveAlert.style.display = 'block';
    } else {
        fiveAlert.style.display = 'none';
    }

    if (questionSixNumber <= 0) {
        sixAlert.style.display = 'block';
    } else {
        sixAlert.style.display = 'none';
    }

    if (questionSevenNumber < 0) {
        sevenAlert.style.display = 'block';
    } else {
        sevenAlert.style.display = 'none';
    }

    if (questionEightNumber < 0) {
        eightAlert.style.display = 'block';
    } else {
        eightAlert.style.display = 'none';
    }

    if (questionNineNumber < 0) {
        nineAlert.style.display = 'block';
    } else {
        nineAlert.style.display = 'none';
    }

    if (questionTenNumber < 0) {
        tenAlert.style.display = 'block';
    } else {
        tenAlert.style.display = 'none';
    }

    if (questionElevenNumber < 0) {
        elevenAlert.style.display = 'block';
    } else {
        elevenAlert.style.display = 'none';
    }

}

