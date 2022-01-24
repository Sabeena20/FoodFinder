import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardTestComponent } from './product-card-test.component';

describe('ProductCardTestComponent', () => {
  let component: ProductCardTestComponent;
  let fixture: ComponentFixture<ProductCardTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
