import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigetherComponent } from './jigether.component';

describe('JigetherComponent', () => {
  let component: JigetherComponent;
  let fixture: ComponentFixture<JigetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JigetherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JigetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
