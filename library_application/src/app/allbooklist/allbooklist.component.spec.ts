import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbooklistComponent } from './allbooklist.component';

describe('AllbooklistComponent', () => {
  let component: AllbooklistComponent;
  let fixture: ComponentFixture<AllbooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbooklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
