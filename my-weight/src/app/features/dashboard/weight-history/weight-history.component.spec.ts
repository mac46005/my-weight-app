import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightHistoryComponent } from './weight-history.component';

describe('WeightHistoryComponent', () => {
  let component: WeightHistoryComponent;
  let fixture: ComponentFixture<WeightHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
