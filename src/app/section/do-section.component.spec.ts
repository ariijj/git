import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoSectionComponent } from './do-section.component';

describe('DoSectionComponent', () => {
  let component: DoSectionComponent;
  let fixture: ComponentFixture<DoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoSectionComponent]
    });
    fixture = TestBed.createComponent(DoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
