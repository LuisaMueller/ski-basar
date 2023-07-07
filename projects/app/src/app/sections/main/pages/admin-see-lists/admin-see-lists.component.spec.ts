import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeeListsComponent } from './admin-see-lists.component';

describe('AdminSeeListsComponent', () => {
  let component: AdminSeeListsComponent;
  let fixture: ComponentFixture<AdminSeeListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSeeListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSeeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
