export default class Process {
    constructor(question) {
        this.question = question;
    }
    checkCorrectAnswer(optionSelected) {
        return this.question.correct === +optionSelected;
    }
}
