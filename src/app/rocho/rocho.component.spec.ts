import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RochoComponent } from './rocho.component';

describe('RochoComponent', () => {
  let component: RochoComponent;
  let fixture: ComponentFixture<RochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RochoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
