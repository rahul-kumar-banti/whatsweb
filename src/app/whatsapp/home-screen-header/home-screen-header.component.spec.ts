import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenHeaderComponent } from './home-screen-header.component';

describe('HomeScreenHeaderComponent', () => {
  let component: HomeScreenHeaderComponent;
  let fixture: ComponentFixture<HomeScreenHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScreenHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
