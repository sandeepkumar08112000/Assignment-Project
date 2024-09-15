import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForm2Component } from './template-form2.component';

describe('TemplateForm2Component', () => {
  let component: TemplateForm2Component;
  let fixture: ComponentFixture<TemplateForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateForm2Component]
    });
    fixture = TestBed.createComponent(TemplateForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
