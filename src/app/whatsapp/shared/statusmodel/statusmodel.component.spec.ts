import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmodelComponent } from './statusmodel.component';

describe('StatusmodelComponent', () => {
  let component: StatusmodelComponent;
  let fixture: ComponentFixture<StatusmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
