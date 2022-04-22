import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinboxComponent } from './minbox.component';

describe('MinboxComponent', () => {
  let component: MinboxComponent;
  let fixture: ComponentFixture<MinboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
