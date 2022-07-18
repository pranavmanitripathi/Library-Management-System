import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduebookComponent } from './overduebook.component';

describe('OverduebookComponent', () => {
  let component: OverduebookComponent;
  let fixture: ComponentFixture<OverduebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverduebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverduebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
