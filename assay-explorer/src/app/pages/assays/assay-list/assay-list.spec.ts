import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssayList } from './assay-list';

describe('AssayList', () => {
  let component: AssayList;
  let fixture: ComponentFixture<AssayList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssayList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssayList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
