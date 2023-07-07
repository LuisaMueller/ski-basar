import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowStatisticsComponent } from './admin-show-statistics.component';

describe('AdminShowStatisticsComponent', () => {
  let component: AdminShowStatisticsComponent;
  let fixture: ComponentFixture<AdminShowStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminShowStatisticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminShowStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
