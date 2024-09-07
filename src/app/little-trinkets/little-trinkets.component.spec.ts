import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleTrinketsComponent } from './little-trinkets.component';

describe('LittleTrinketsComponent', () => {
  let component: LittleTrinketsComponent;
  let fixture: ComponentFixture<LittleTrinketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LittleTrinketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LittleTrinketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
