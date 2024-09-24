import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesComponent } from './notices.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IconModule } from '#shared/icons/Icon.module';
import { SharedModule } from '#shared/shared.module';

describe('NoticesComponent', () => {
  let component: NoticesComponent;
  let fixture: ComponentFixture<NoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticesComponent],
      imports: [HttpClientTestingModule, IconModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
