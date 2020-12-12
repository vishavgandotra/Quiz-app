import { QuestionHandler } from "./QuestionHandler.js";
let template;
fetch("./json/questions.json")
    .then((response) => response.json())
    .catch(() => alert("Please check your connection"))
    .then((questions) => new QuestionHandler(questions))
    .then((object) => {
    object.renderQuestion();
    template = object;
})
    .catch(() => alert("Unable to get Questions, please try again"));
let options = document.querySelectorAll(".list-group a ");
options.forEach(element => {
    element.addEventListener("click", (event) => {
        template.checkCorrectAnswer(event.currentTarget);
    });
});
