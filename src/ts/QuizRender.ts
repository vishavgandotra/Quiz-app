import { Question } from "./model/Question";

export default function prepareQuestionUI(question: Question, questionNumber : number){
    removeClasses();
    
    let questionNumberDiv  = document.getElementById("questionNumber");
  
    if(questionNumberDiv){
        questionNumberDiv.innerHTML = String(questionNumber);
    }
    let questionDiv  = document.getElementById("question");
    if(questionDiv){
        let questionString: string = question?.question;
        questionDiv.innerHTML = questionString;
    }
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    if(option1){
        option1.innerHTML = question?.options[0];
    }

    if(option2){
        option2.innerHTML = question?.options[1];
    }
    
    if(option3){
        option3.innerHTML = question?.options[2];
    }
    
    if(option4){
        option4.innerHTML = question?.options[3];
    }

}

export let checkOptionValidity = (element : Element, isCorrectOption:boolean) => {
    let listGroup = document.querySelector(".list-group");
    listGroup?.classList.add("no-pointer-event");
    if(isCorrectOption){
        optionCorrectRender(element);
    }
    else{
        optionInCorrectRender(element);
    }
};

export let renderResultPage = (totalCorrect: number) => {
    let questionContainer = document.getElementById("questionContainer");
    let resultContainer = document.getElementById("resultContainer");
    let resultDiv = document.getElementById("score");

    questionContainer?.classList.replace("d-flex", "d-none");
    resultContainer?.classList.remove("d-none");
    if(resultDiv)
         resultDiv.innerHTML = ""+totalCorrect;
 };

 let optionCorrectRender = (element:Element) =>{
    element.classList.add("correct-option");
};

let optionInCorrectRender = (element:Element) =>{
    element.classList.add("incorrect-option");
};

let removeClasses = ()=> {
    let listGroup = document.querySelector(".list-group");
    listGroup?.classList.remove("no-pointer-event");

    let options = document.querySelectorAll(".list-group a ");
    options.forEach(element => {
        element.classList.remove("correct-option");
        element.classList.remove("incorrect-option");
    });
};