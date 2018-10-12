import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactKeypadComponent } from './contact-keypad.component';

describe('ContactKeypadComponent', () => {
  let component: ContactKeypadComponent;
  let fixture: ComponentFixture<ContactKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
