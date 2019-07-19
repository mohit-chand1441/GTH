import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgmatchComponent } from './pubgmatch.component';

describe('PubgmatchComponent', () => {
  let component: PubgmatchComponent;
  let fixture: ComponentFixture<PubgmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubgmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubgmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
