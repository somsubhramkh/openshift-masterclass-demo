import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { BoardAdminComponent } from '../src/app/board-admin/board-admin.component';
// import { UserService } from '../_services/user.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
describe('BoardAdminComponent', () => {
  let component: BoardAdminComponent;
  let fixture: ComponentFixture<BoardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,ReactiveFormsModule],
      // providers:[UserService],
      declarations: [ BoardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminComponent);
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


it('Checking programName field validity', () => {
  let errors = {};
  let pn = component.form.controls['programName'];
  expect(pn.valid).toBeFalsy();

  // Query field is required
  errors = pn.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set query to something correct
  pn.setValue("I have query on yearly package");
  errors = pn.errors || {};
  expect(errors['required']).toBeFalsy();

});

it('Checking price field validity', () => {
  let errors = {};
  let price = component.form.controls['price'];
  expect(price.valid).toBeFalsy();

  // price field is required
  errors = price.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set price to something correct
  price.setValue(15000);
  errors = price.errors || {};
  expect(errors['required']).toBeFalsy();

});

it('Checking durationInMonths field validity', () => {
  let errors = {};
  let durationInMonths = component.form.controls['durationInMonths'];
  expect(durationInMonths.valid).toBeFalsy();

  // durationInMonths field is required
  errors = durationInMonths.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set durationInMonths to something correct
  durationInMonths.setValue(10);
  errors = durationInMonths.errors || {};
  expect(errors['required']).toBeFalsy();

});

});
