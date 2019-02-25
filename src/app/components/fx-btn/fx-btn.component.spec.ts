import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxBtnComponent } from './fx-btn.component';

describe('FxBtnComponent', () => {
  let component: FxBtnComponent;
  let fixture: ComponentFixture<FxBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
