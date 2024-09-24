import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCardComponent } from './footer-card.component';

describe('FooterCardComponent', () => {
  let component: FooterCardComponent;
  let fixture: ComponentFixture<FooterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterCardComponent],
    });
    fixture = TestBed.createComponent(FooterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct date format', () => {
    jasmine.clock().install();
    const baseTime = new Date(2024, 7, 2);
    jasmine.clock().mockDate(baseTime);

    const date = component.showDate();
    expect(date).toEqual('02/08/2024');

    jasmine.clock().uninstall();
  });

  it('should return the correct hour format', () => {
    jasmine.clock().install();
    const baseTime = new Date(2024, 7, 22, 2, 5);
    jasmine.clock().mockDate(baseTime);

    const hour = component.showHour();
    expect(hour).toEqual('02:05');

    jasmine.clock().uninstall();
  });
});
