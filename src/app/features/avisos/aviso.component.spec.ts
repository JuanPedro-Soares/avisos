import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { AvisoComponent } from "./aviso.component";
import { of } from "rxjs";
import { NoticesService } from "#shared/services/notices/notices.service";
import { Router } from "@angular/router";
import { ComponentsModule } from "#features/avisos/components/components.module";
import { INews } from "#core/interfaces";
import { NO_ERRORS_SCHEMA } from "@angular/core";

class MockNoticesService {
  getNotices() {
    return of([
      { id: 1, titulo: "News 1", descricao: "Description 1" },
      { id: 2, titulo: "News 2", descricao: "Description 2" },
    ]);
  }
}

class MockRouter {
  navigate = jasmine
    .createSpy("navigate")
    .and.returnValue(Promise.resolve(true));
}

describe(`${AvisoComponent.name}`, () => {
  let component: AvisoComponent;
  let fixture: ComponentFixture<AvisoComponent>;
  let mockNoticesService: MockNoticesService;
  let mockRouter: MockRouter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvisoComponent],
      imports: [ComponentsModule],
      providers: [
        { provide: NoticesService, useClass: MockNoticesService },
        { provide: Router, useClass: MockRouter },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoComponent);
    component = fixture.componentInstance;
    mockNoticesService = TestBed.inject(NoticesService) as MockNoticesService;
    mockRouter = TestBed.inject(Router) as unknown as MockRouter;
    fixture.detectChanges();
  });

  afterEach(async () => {
    component.ngOnDestroy();
  });

  it(`Should be created`, () => {
    expect(component).toBeTruthy();
  });

  it(`Should be load data when initialized`, () => {
    spyOn(component, "loadData").and.callThrough();
    component.ngOnInit();
    expect(component.loadData).toHaveBeenCalled();
  });

  it(`Should call nextCard() after
    newsDurationInSeconds`, fakeAsync(() => {
    spyOn(component, "callNextCardAfterInterval").and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    tick(component.newsDurationInSeconds * 1000);
    expect(component.callNextCardAfterInterval).toHaveBeenCalled();
    component.ngOnDestroy();
  }));

  it(`#${AvisoComponent.prototype.updateCardsData.name}
    should update cards data correctly`, () => {
    const mockNotices: INews[] = [
      { id: 1, titulo: "News 1", descricao: "Description 1", categoriaId: 7 },
      { id: 2, titulo: "News 2", descricao: "Description 2", categoriaId: 7 },
    ];
    component.updateCardsData(mockNotices);
    expect(component.newsCards.length).toBe(2);
    expect(component.newsCards[0].titulo).toBe("News 1");
    expect(component.newsCards[1].descricao).toBe("Description 2");
  });

  it(`#${AvisoComponent.prototype.nextCard.name}
    should advance to the next card when called`, () => {
    component.ngOnInit();
    expect(component.getCurrentCard().titulo).toBe("News 1");

    component.nextCard();
    expect(component.getCurrentCard().titulo).toBe("News 2");

    component.nextCard();
    expect(component.getCurrentCard().titulo).toBe("News 1");
  });

  it(`#${AvisoComponent.prototype.handleEscapeKey.name}
    should navigate to home page when escape key press`, () => {
    component.handleEscapeKey();
    expect(mockRouter.navigate).toHaveBeenCalledWith(["/"]);
  });
});
