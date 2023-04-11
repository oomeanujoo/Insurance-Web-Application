import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicysummaryComponent } from './policysummary.component';

describe('PolicysummaryComponent', () => {
  let component: PolicysummaryComponent;
  let fixture: ComponentFixture<PolicysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
