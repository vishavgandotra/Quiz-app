import Process from "./model/QuestionProcessing.js";
import prepareQuestionUI, { checkOptionValidity, renderResultPage } from "./QuizRender.js";
export class QuestionHandler {
    constructor(questions, questtionNumber = 1) {
        this.questions = questions;
        this.questtionNumber = questtionNumber;
        let question = this.getQuestionSelected();
        this.process = new Process(question);
        this.totalCorrect = 0;
    }
    renderQuestion() {
        if (this.questions.Questions.length >= this.questtionNumber) {
            const question = this.getQuestionSelected();
            this.process = new Process(question);
            prepareQuestionUI(question, this.questtionNumber);
        }
        else {
            renderResultPage(this.totalCorrect);
        }
    }
    getQuestionSelected() {
        return this.questions.Questions[this.questtionNumber - 1];
    }
    checkCorrectAnswer(element) {
        let optionSelected = element === null || element === void 0 ? void 0 : element.getAttribute("option");
        if (optionSelected) {
            let isCorrect = this.process.checkCorrectAnswer(optionSelected);
            if (isCorrect)
                this.totalCorrect++;
            checkOptionValidity(element, isCorrect);
            setTimeout(() => {
                this.questtionNumber++;
                this.renderQuestion();
            }, 1500);
        }
    }
}
