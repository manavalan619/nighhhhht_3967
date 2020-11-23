import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadetComponent } from './upadet.component';

describe('UpadetComponent', () => {
  let component: UpadetComponent;
  let fixture: ComponentFixture<UpadetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});