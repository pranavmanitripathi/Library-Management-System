import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowbookComponent } from './borrowbook.component';

describe('BorrowbookComponent', () => {
  let component: BorrowbookComponent;
  let fixture: ComponentFixture<BorrowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
