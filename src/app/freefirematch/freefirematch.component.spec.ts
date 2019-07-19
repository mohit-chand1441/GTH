import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreefirematchComponent } from './freefirematch.component';

describe('FreefirematchComponent', () => {
  let component: FreefirematchComponent;
  let fixture: ComponentFixture<FreefirematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreefirematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreefirematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
