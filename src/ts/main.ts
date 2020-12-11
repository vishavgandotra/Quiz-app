import { Questions} from "./model/Question";
import {QuestionHandler} from "./QuestionHandler";

let template: QuestionHandler;
fetch("../../json/questions.json")
    .then( (response) => response.json())
    .catch(() => alert("Please check your connection"))
    .then( (questions : Questions) => new QuestionHandler(questions))
    .then((object: QuestionHandler) =>{
          object.renderQuestion();
          template = object;
    })    
    .catch( () => alert("Unable to get Questions, please try again"));  


let options = document.querySelectorAll(".list-group a ");

options.forEach(element => {
    element.addEventListener("click", (event ) => {
        
        template.checkCorrectAnswer(<Element>event.currentTarget);       
        
    });
});