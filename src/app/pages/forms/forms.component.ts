import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit  {

  @Output() newItemEvent = new EventEmitter<any>();
  addDetails!: FormGroup;
  countries:any[] = [];
  coursesPercentage: number = 0;
  public form!: FormGroup;
  public progress: number;
  public formObserver!: Subscription; 
  
  count: number = 0;
  constructor(private route:Router, private fb: FormBuilder, private api: ServiceService){
    
    this.progress = 0;
  }

  ngOnInit(): void {
    console.log("render");
    this.setupForm();
    
    this.addDetails = this.fb.group({
      glasstype: [''],
      section: [''],
      flaming: [''],
    });
  }
  

  handleChange(){
    this.newItemEvent.emit('placeOrder')
  }
  


 

  ngOnDestroy() {
    this.formObserver.unsubscribe();
  }

  setupForm(): void {
    this.form = new FormGroup({
      Color: new FormControl('', {
        validators: Validators.required,
        
      }),
      Flaming: new FormControl('', {
       
        
      }),
      ColorLay: new FormControl('', {
        validators: Validators.required,
        
      }),
      Additional: new FormControl('', {
        validators: [
          Validators.required,
        ],
        
      })
    });

    this.formObserver = this.form.valueChanges
    .pipe(debounceTime(500))
    .subscribe(() => this.onFormChanged(this.form));
  }

  onFormChanged(form: FormGroup): void {
    this.progress = this.calculateFormProgress(form);
  }

  calculateFormProgress(form: FormGroup): number {

    const controlCount = Object.keys(form.controls).length;
    let validCount = 0;

    for( const [key, value] of Object.entries(form.controls)) {
      if (value.valid) validCount++;
    }
    this.count = validCount / controlCount * 100;
    return validCount / controlCount * 100;
  }

  

}
