import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoputsearchComponent } from './poputsearch.component';

describe('PoputsearchComponent', () => {
  let component: PoputsearchComponent;
  let fixture: ComponentFixture<PoputsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoputsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoputsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
