import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchOngoingComponent } from './watch-ongoing.component';

describe('WatchOngoingComponent', () => {
  let component: WatchOngoingComponent;
  let fixture: ComponentFixture<WatchOngoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchOngoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
