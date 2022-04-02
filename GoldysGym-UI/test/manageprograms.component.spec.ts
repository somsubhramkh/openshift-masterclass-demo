import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageprogramsComponent } from '../src/app/manageprograms/manageprograms.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageprogramsComponent', () => {
  let component: ManageprogramsComponent;
  let fixture: ComponentFixture<ManageprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ManageprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
