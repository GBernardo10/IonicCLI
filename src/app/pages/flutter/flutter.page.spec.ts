import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterPage } from './flutter.page';

describe('FlutterPage', () => {
  let component: FlutterPage;
  let fixture: ComponentFixture<FlutterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlutterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlutterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
