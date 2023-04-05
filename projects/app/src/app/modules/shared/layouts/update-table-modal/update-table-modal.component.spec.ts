import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTableModalComponent } from './update-table-modal.component';

describe('ModalBasicComponent', () => {
  let component: UpdateTableModalComponent;
  let fixture: ComponentFixture<UpdateTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTableModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
