import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPurchaseComponent } from './vendor-purchase.component';

describe('VendorPurchaseComponent', () => {
  let component: VendorPurchaseComponent;
  let fixture: ComponentFixture<VendorPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
