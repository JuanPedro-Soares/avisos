import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditUserDialogComponent } from './edit-user-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '#shared/shared.module';
import { FormComponent } from '#features/manager/components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditUserDialogComponent', () => {
  let component: EditUserDialogComponent;
  let fixture: ComponentFixture<EditUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserDialogComponent, FormComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
