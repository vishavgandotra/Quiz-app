export default function prepareQuestionUI(question, questionNumber) {
    removeClasses();
    let questionNumberDiv = document.getElementById("questionNumber");
    if (questionNumberDiv) {
        questionNumberDiv.innerHTML = String(questionNumber);
    }
    let questionDiv = document.getElementById("question");
    if (questionDiv) {
        let questionString = question === null || question === void 0 ? void 0 : question.question;
        questionDiv.innerHTML = questionString;
    }
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");
    if (option1) {
        option1.innerHTML = question === null || question === void 0 ? void 0 : question.options[0];
    }
    if (option2) {
        option2.innerHTML = question === null || question === void 0 ? void 0 : question.options[1];
    }
    if (option3) {
        option3.innerHTML = question === null || question === void 0 ? void 0 : question.options[2];
    }
    if (option4) {
        option4.innerHTML = question === null || question === void 0 ? void 0 : question.options[3];
    }
}
export let checkOptionValidity = (element, isCorrectOption) => {
    let listGroup = document.querySelector(".list-group");
    listGroup === null || listGroup === void 0 ? void 0 : listGroup.classList.add("no-pointer-event");
    if (isCorrectOption) {
        optionCorrectRender(element);
    }
    else {
        optionInCorrectRender(element);
    }
};
export let renderResultPage = (totalCorrect) => {
    let questionContainer = document.getElementById("questionContainer");
    let resultContainer = document.getElementById("resultContainer");
    let resultDiv = document.getElementById("score");
    questionContainer === null || questionContainer === void 0 ? void 0 : questionContainer.classList.replace("d-flex", "d-none");
    resultContainer === null || resultContainer === void 0 ? void 0 : resultContainer.classList.remove("d-none");
    if (resultDiv)
        resultDiv.innerHTML = "" + totalCorrect;
};
let optionCorrectRender = (element) => {
    element.classList.add("correct-option");
};
let optionInCorrectRender = (element) => {
    element.classList.add("incorrect-option");
};
let removeClasses = () => {
    let listGroup = document.querySelector(".list-group");
    listGroup === null || listGroup === void 0 ? void 0 : listGroup.classList.remove("no-pointer-event");
    let options = document.querySelectorAll(".list-group a ");
    options.forEach(element => {
        element.classList.remove("correct-option");
        element.classList.remove("incorrect-option");
    });
};
