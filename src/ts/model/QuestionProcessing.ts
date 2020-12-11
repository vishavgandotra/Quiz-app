import { Question } from "./Question";

export default class Process{

    constructor(readonly question: Question){}

    checkCorrectAnswer(optionSelected : string):boolean{
        return this.question.correct === +optionSelected;
    }
}