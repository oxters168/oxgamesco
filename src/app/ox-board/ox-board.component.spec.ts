import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxBoardComponent } from './ox-board.component';

describe('OxBoardComponent', () => {
  let component: OxBoardComponent;
  let fixture: ComponentFixture<OxBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OxBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OxBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
