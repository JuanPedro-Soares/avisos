import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonLayoutComponent } from './common-layout.component';
import { IconModule } from '#shared/icons/Icon.module';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('CommonLayoutComponent', () => {
  let component: CommonLayoutComponent;
  let fixture: ComponentFixture<CommonLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonLayoutComponent],
      imports: [IconModule, RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
