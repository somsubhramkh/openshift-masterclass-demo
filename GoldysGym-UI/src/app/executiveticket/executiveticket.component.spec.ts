import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveticketComponent } from './executiveticket.component';

describe('ExecutiveticketComponent', () => {
  let component: ExecutiveticketComponent;
  let fixture: ComponentFixture<ExecutiveticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
