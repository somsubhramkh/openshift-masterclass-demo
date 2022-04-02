import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserqueryComponent } from '../src/app/userquery/userquery.component';
import { Enquiry } from 'src/app/models/Enquiry';


describe('UserqueryComponent', () => {
  let component: UserqueryComponent;
  let fixture: ComponentFixture<UserqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,ReactiveFormsModule],
      declarations: [ UserqueryComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // checking when form is empty
  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
});

// Checking the form fields

it('Checking query field validity', () => {
  let errors = {};
  let query = component.form.controls['query'];
  expect(query.valid).toBeFalsy();

  // Query field is required
  errors = query.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set query to something correct
  query.setValue("I have query on yearly package");
  errors = query.errors || {};
  expect(errors['required']).toBeFalsy();

});
it('Checking mobile field validity', () => {
  let errors = {};
  let mobile = component.form.controls['mobile'];
  expect(mobile.valid).toBeFalsy();

  // Mobile field is required
  errors = mobile.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set mobile to something correct
  mobile.setValue(1234567890);
  errors = mobile.errors || {};
  expect(errors['required']).toBeFalsy();
});

it('Checking name field validity', () => {
  let errors = {};
  let name = component.form.controls['name'];
  expect(name.valid).toBeFalsy();

  // name field is required
  errors = name.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set name to something correct
  name.setValue(1234567890);
  errors = name.errors || {};
  expect(errors['required']).toBeFalsy();
});

});
