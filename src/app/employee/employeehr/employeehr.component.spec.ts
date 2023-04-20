import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeehrComponent } from './employeehr.component';

describe('EmployeehrComponent', () => {
  let component: EmployeehrComponent;
  let fixture: ComponentFixture<EmployeehrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeehrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
