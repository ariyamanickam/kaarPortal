import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorQuotationDetailComponent } from './vendor-quotation-detail.component';

describe('VendorQuotationDetailComponent', () => {
  let component: VendorQuotationDetailComponent;
  let fixture: ComponentFixture<VendorQuotationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorQuotationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorQuotationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
