import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsCardComponent } from './news-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IconModule } from '#shared/icons/Icon.module';
import { SharedModule } from '#shared/shared.module';

describe('CardsComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        IconModule,
        SharedModule,
      ],
      declarations: [NewsCardComponent],
    });
    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
