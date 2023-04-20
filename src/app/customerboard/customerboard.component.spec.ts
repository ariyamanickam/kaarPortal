import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerboardComponent } from './customerboard.component';

describe('CustomerboardComponent', () => {
  let component: CustomerboardComponent;
  let fixture: ComponentFixture<CustomerboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
