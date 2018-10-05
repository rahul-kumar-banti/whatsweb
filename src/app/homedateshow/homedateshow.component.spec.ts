import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedateshowComponent } from './homedateshow.component';

describe('HomedateshowComponent', () => {
  let component: HomedateshowComponent;
  let fixture: ComponentFixture<HomedateshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedateshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedateshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
