import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodywebComponent } from './bodyweb.component';

describe('BodywebComponent', () => {
  let component: BodywebComponent;
  let fixture: ComponentFixture<BodywebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodywebComponent]
    });
    fixture = TestBed.createComponent(BodywebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
