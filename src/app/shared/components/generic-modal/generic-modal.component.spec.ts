import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalComponent } from './generic-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconModule } from '#shared/icons/Icon.module';
import { SharedModule } from '#shared/shared.module';

describe('CommonDialogComponent', () => {
  let component: GenericModalComponent;
  let fixture: ComponentFixture<GenericModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericModalComponent],
      imports: [IconModule, SharedModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
