import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraScreenComponent } from './camera-screen.component';

describe('CameraScreenComponent', () => {
  let component: CameraScreenComponent;
  let fixture: ComponentFixture<CameraScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
