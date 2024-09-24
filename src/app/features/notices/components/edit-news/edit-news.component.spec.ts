import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditNewsComponent } from './edit-news.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IconModule } from '#shared/icons/Icon.module';
import { SharedModule } from '#shared/shared.module';
import { NewsCardComponent } from '#features/notices/components/news-card/news-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('EditNewsComponent', () => {
  let component: EditNewsComponent;
  let fixture: ComponentFixture<EditNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNewsComponent, NewsCardComponent],
      imports: [
        MatDialogModule,
        IconModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(EditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
