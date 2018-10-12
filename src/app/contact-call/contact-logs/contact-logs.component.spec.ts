import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLogsComponent } from './contact-logs.component';

describe('ContactLogsComponent', () => {
  let component: ContactLogsComponent;
  let fixture: ComponentFixture<ContactLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
