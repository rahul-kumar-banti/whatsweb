import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCallComponent } from './contact-call.component';

describe('ContactCallComponent', () => {
  let component: ContactCallComponent;
  let fixture: ComponentFixture<ContactCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
