import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorboardComponent } from './vendorboard.component';

describe('VendorboardComponent', () => {
  let component: VendorboardComponent;
  let fixture: ComponentFixture<VendorboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
