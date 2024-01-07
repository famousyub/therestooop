import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydownloadComponent } from './mydownload.component';

describe('MydownloadComponent', () => {
  let component: MydownloadComponent;
  let fixture: ComponentFixture<MydownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
