import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateneworderComponent } from './createneworder.component';

describe('CreateneworderComponent', () => {
  let component: CreateneworderComponent;
  let fixture: ComponentFixture<CreateneworderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateneworderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateneworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
