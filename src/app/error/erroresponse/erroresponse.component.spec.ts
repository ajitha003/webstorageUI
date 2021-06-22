import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroresponseComponent } from './erroresponse.component';

describe('ErroresponseComponent', () => {
  let component: ErroresponseComponent;
  let fixture: ComponentFixture<ErroresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
