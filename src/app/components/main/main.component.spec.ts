import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  @Component({selector: 'app-header', template: ''})
  class HeaderStubComponent {}

  @Component({selector: 'app-content', template: ''})
  class ContentStubComponent {}


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        HeaderStubComponent,
        ContentStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
