import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustodashComponent } from './custodash.component';

describe('CustodashComponent', () => {
  let component: CustodashComponent;
  let fixture: ComponentFixture<CustodashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustodashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
