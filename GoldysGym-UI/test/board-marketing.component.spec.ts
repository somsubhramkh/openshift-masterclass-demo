import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { BoardMarketingComponent } from '../src/app/board-marketing/board-marketing.component';
import { FormsModule } from '@angular/forms';


describe('BoardMarketingComponent', () => {
  let component: BoardMarketingComponent;
  let fixture: ComponentFixture<BoardMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule],
      declarations: [ BoardMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
