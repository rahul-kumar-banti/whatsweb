import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontrolComponent } from './homecontrol.component';

describe('HomecontrolComponent', () => {
  let component: HomecontrolComponent;
  let fixture: ComponentFixture<HomecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
