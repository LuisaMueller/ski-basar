import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeeArchiveComponent } from './admin-see-archive.component';

describe('AdminSeeArchiveComponent', () => {
  let component: AdminSeeArchiveComponent;
  let fixture: ComponentFixture<AdminSeeArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSeeArchiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSeeArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
