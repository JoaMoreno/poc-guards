import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandarComponent } from './standar.component';

describe('StandarComponent', () => {
  let component: StandarComponent;
  let fixture: ComponentFixture<StandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
