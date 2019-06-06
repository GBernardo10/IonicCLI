import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserPage } from './list-user.page';

describe('ListUserPage', () => {
  let component: ListUserPage;
  let fixture: ComponentFixture<ListUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
