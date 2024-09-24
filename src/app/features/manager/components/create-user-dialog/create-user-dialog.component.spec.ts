import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserDialogComponent } from './create-user-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IconModule } from '#shared/icons/Icon.module';
import { SharedModule } from '#shared/shared.module';
import { FormComponent } from '#features/manager/components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateEditUserDialogComponent', () => {
  let component: CreateUserDialogComponent;
  let fixture: ComponentFixture<CreateUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserDialogComponent, FormComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        IconModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
