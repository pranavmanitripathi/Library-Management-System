import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlendedbooksComponent } from './userlendedbooks.component';

describe('UserlendedbooksComponent', () => {
  let component: UserlendedbooksComponent;
  let fixture: ComponentFixture<UserlendedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlendedbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlendedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
