import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change addClass to true and stateStatus to opposite value when input value length more then 9', () => {
    const event = {target: {value: 'Some content'}};
    component.stateStatus = false;

    component.watchInput(event);
    expect(component.addClass).toBeTruthy();
    expect(component.stateStatus).toBeTruthy();
  });

  it('should change addClass to false when input value length less then 10', () => {
    const event = {target: {value: 'Content'}};

    component.watchInput(event);
    expect(component.addClass).toBeFalsy();
  });
});
