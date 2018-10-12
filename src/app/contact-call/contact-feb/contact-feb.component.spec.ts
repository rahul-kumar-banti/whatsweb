import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFebComponent } from './contact-feb.component';

describe('ContactFebComponent', () => {
  let component: ContactFebComponent;
  let fixture: ComponentFixture<ContactFebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
