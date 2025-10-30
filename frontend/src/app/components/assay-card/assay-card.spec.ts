import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssayCard } from './assay-card';

describe('AssayCard', () => {
  let component: AssayCard;
  let fixture: ComponentFixture<AssayCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssayCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssayCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
