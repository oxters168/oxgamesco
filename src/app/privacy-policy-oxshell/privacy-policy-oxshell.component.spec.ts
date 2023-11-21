import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyOxshellComponent } from './privacy-policy-oxshell.component';

describe('PrivacyPolicyOxshellComponent', () => {
  let component: PrivacyPolicyOxshellComponent;
  let fixture: ComponentFixture<PrivacyPolicyOxshellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyOxshellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyPolicyOxshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
