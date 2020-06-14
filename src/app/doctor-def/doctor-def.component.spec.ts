import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDefComponent } from './doctor-def.component';

describe('DoctorDefComponent', () => {
  let component: DoctorDefComponent;
  let fixture: ComponentFixture<DoctorDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
