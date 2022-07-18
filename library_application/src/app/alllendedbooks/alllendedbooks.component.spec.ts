import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllendedbooksComponent } from './alllendedbooks.component';

describe('AlllendedbooksComponent', () => {
  let component: AlllendedbooksComponent;
  let fixture: ComponentFixture<AlllendedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllendedbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlllendedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
