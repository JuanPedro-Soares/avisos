import { TestBed } from "@angular/core/testing";
import * as signalR from "@microsoft/signalr";
import { HubService } from "#shared/services/hub/hub.service";

fdescribe(`${HubService.name}`, () => {
  let hubService: HubService;
  let mockHubConnection: jasmine.SpyObj<signalR.HubConnection>;
  
  beforeEach(() => {
    const hubconnectSpy = jasmine.createSpyObj('HubConnection', ['start', 'stop', 'on', 'invoke']);
    
    TestBed.configureTestingModule({
      providers: [
        HubService,
        {
          provide: signalR.HubConnection,
          useValue: hubconnectSpy,
        },
      ],
    });
    hubService = TestBed.inject(HubService);
    mockHubConnection = TestBed.inject(signalR.HubConnection) as jasmine.SpyObj<signalR.HubConnection>;
    hubService['hubConnection'] = mockHubConnection;
  });

  it("should be created", () => {
    expect(hubService).toBeTruthy();
  });

  it(`${HubService.prototype.startConnection.name} should start connection successfully`, async () => {
    mockHubConnection.start.and.returnValue(Promise.resolve());
    
    hubService.startConnection();

    expect(mockHubConnection.start).toHaveBeenCalled();
  });

  it(`${HubService.prototype.avisosUpdate.name} should register the callback para AvisosAtualizados`, () => {
    const callback = jasmine.createSpy("callback");
    
    hubService.avisosUpdate(callback);

    expect(mockHubConnection.on).toHaveBeenCalledWith(
      "AvisosAtualizados",
      callback,
    );
  });
  
  it(`${HubService.prototype.stopConnection.name} should stop connection successfully`,
    (done: DoneFn) => {
    mockHubConnection.stop.and.returnValue(Promise.resolve());
    
    hubService.stopConnection();
    
    setTimeout(() => {
      expect(mockHubConnection.stop).toHaveBeenCalled();
      done();
    }, 100);
  });
  
  it(`${HubService.prototype.stopConnection.name} should log error when stop connection fails`,
    (done: DoneFn) => {
    const error = new Error('Error stopping connection');
    mockHubConnection.stop.and.returnValue(Promise.reject(error));
    
    spyOn(console, 'error');
    
    hubService.stopConnection();
    
    setTimeout(() => {
      expect(mockHubConnection.stop).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Connection falhou ao parar com error:', error.message);
      done();
    }, 100);
  });
});
