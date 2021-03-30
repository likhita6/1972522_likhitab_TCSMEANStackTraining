//import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Test} from '../test.sample';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions:Array<Test>=[];
  correctAnswer:Array<QA>=[];
  yourAnswer:Array<QA>=[];
  total:number = 0;
  flag:boolean = false;
  click:boolean = false;
  constructor(public testQA:TestService) { }

  ngOnInit(): void {
    this.testQA.loadTestDetails().subscribe(result=>{this.questions=result
    for (let y=0;y<5;y++){ 
      this.createcorrectAnswer(result[y].question,result[y].correctAnswer)
    }});
    
  }
  onSelect(question:string,answer:number){
    let obj = new QA(question,answer);
    let n:boolean = true;
    for (let i=0;i<this.yourAnswer.length;i++){
      if(this.yourAnswer[i].question == question){
        n = false;
        this.yourAnswer[i].answer = answer;
      }
    }
   if(n){this.yourAnswer.push(obj);} 

  }
  createcorrectAnswer(question:string, answer:number){
    let obj = new QA(question,answer);
    this.correctAnswer.push(obj);
  }
  onSubmit(){
    this.evalute();
    this.flag = true;
    this.click = !this.click;
    this.textDisplay();
  }
  colorCode():string{
    let color:string = "red"
    if(this.total>=7){
      color = "green"
    }
    return color;
  }

  evalute(){
    for(let j=0;j<5;j++){
      let question = this.correctAnswer[j].question;
      for (let i=0;i<5;i++){
        if(this.yourAnswer[i].question == question){
         
          if(this.yourAnswer[i].answer == this.correctAnswer[j].answer){
            this.total++;
            this.total=this.total+1;
          }
        
        }
      }
     
    }
    if(this.total==7||this.total>7){
        alert("Pass,click ok to display answers");
    }
        else{
            alert("Fail,click ok to display answers");
        }
    }


  
 textDisplay(){
    for(let i=0;i<5;i++){
      document.getElementById(this.yourAnswer[i].question+this.yourAnswer[i].answer)!.innerHTML +="     *<span style=\"color:RED\"> YOUR ANSWER </span>";
      document.getElementById(this.correctAnswer[i].question+this.correctAnswer[i].answer)!.innerHTML +="         *<span style=\"color:GREEN\"> CORRECT ANSWER </span>";
    }
  
  }
}
class QA {
  constructor(public question:string, public answer:number){}
}