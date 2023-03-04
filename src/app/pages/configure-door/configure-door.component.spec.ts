import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureDoorComponent } from './configure-door.component';

describe('ConfigureDoorComponent', () => {
  let component: ConfigureDoorComponent;
  let fixture: ComponentFixture<ConfigureDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureDoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
