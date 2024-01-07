import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationvideoComponent } from './formationvideo.component';

describe('FormationvideoComponent', () => {
  let component: FormationvideoComponent;
  let fixture: ComponentFixture<FormationvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
