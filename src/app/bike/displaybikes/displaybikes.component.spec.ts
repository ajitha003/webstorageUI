import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybikesComponent } from './displaybikes.component';

describe('DisplaybikesComponent', () => {
  let component: DisplaybikesComponent;
  let fixture: ComponentFixture<DisplaybikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
