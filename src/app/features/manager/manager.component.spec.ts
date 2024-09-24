import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { IconModule } from '#shared/icons/Icon.module';
import { SharedModule } from '#shared/shared.module';

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        IconModule,
        SharedModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
