import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGoodsDetailComponent } from './vendor-goods-detail.component';

describe('VendorGoodsDetailComponent', () => {
  let component: VendorGoodsDetailComponent;
  let fixture: ComponentFixture<VendorGoodsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorGoodsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorGoodsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
