import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssayDetail } from './assay-detail';

describe('AssayDetail', () => {
  let component: AssayDetail;
  let fixture: ComponentFixture<AssayDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssayDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssayDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
