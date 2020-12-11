import { Questions, Question} from "./model/Question"
import Process from "./model/QuestionProcessing";
import prepareQuestionUI, { checkOptionValidity, renderResultPage } from "./QuizRender";

export class QuestionHandler {    
    private process: Process;
    private totalCorrect:number;
    constructor(private questions: Questions, private questtionNumber=1){        
            let question : Question = this.getQuestionSelected();
            this.process = new Process(question);         
            this.totalCorrect=0;
    }

     renderQuestion(){
        if(this.questions.Questions.length >= this.questtionNumber){
            const question : Question = this.getQuestionSelected();
            this.process = new Process(question);  
            prepareQuestionUI(question,this.questtionNumber);
        }
        else{
            renderResultPage(this.totalCorrect);
        }
     }

     getQuestionSelected():Question{
         return this.questions.Questions[this.questtionNumber-1];
     }

    checkCorrectAnswer(element : Element){
        let optionSelected = element?.getAttribute("option");
        if(optionSelected){
           let isCorrect = this.process.checkCorrectAnswer(optionSelected);
           if(isCorrect) this.totalCorrect++;
           checkOptionValidity(element, isCorrect);
           setTimeout( () => {
               this.questtionNumber++;
               this.renderQuestion();
           }, 1500);
        }
    }
    
}