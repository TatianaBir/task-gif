import { AutofocusDirective } from './autofocus.directive';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AutofocusDirective', () => {

  @Component({
    template: `<input type="text" appAutofocus>`
  })

  class TestComponent { }
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async() => {
     fixture = TestBed.configureTestingModule({
      declarations: [ AutofocusDirective, TestComponent ]
    })
      .createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const input = fixture.nativeElement.querySelector('input');
    const directive = new AutofocusDirective(input);

    expect(directive).toBeTruthy();
  });
});
