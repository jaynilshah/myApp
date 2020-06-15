import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTileComponent } from './patient-tile.component';

describe('PatientTileComponent', () => {
  let component: PatientTileComponent;
  let fixture: ComponentFixture<PatientTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
