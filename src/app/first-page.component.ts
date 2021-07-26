import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sm-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  aValues: string[] = ["HELLO","BYE","SEE YOU","NICE","GOOD"];
  bShow = false;
  valueInput1 = 'value coming from parent inserted via Input'
  outputValue = 'output vali initial value';
  reactiveForm : FormGroup ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bShow = true;
    // this.reactiveForm = new FormGroup({
    //   name: new FormControl("Helo")
    // })

    this.reactiveForm = this.formBuilder.group({
      name: "formBuilder"
    });
  }

  onFilter($event){
    this.aValues = this.aValues.filter(value=> value !=="HELLO")
  }

  onOutputValueClicked($event){
    this.outputValue = $event;
  }

  onSubmit(form:FormGroup){
    console.log(form);
    console.log(form.value.name);
  }

}
