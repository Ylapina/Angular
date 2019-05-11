import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrliLinesComponent } from './prli-lines.component';

describe('PrliLinesComponent', () => {
  let component: PrliLinesComponent;
  let fixture: ComponentFixture<PrliLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrliLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrliLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
