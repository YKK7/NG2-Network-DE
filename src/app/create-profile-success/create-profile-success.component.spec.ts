import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileSuccessComponent } from './create-profile-success.component';

describe('CreateProfileSuccessComponent', () => {
  let component: CreateProfileSuccessComponent;
  let fixture: ComponentFixture<CreateProfileSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfileSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
