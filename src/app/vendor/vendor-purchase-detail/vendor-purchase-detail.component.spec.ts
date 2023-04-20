import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPurchaseDetailComponent } from './vendor-purchase-detail.component';

describe('VendorPurchaseDetailComponent', () => {
  let component: VendorPurchaseDetailComponent;
  let fixture: ComponentFixture<VendorPurchaseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPurchaseDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPurchaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
