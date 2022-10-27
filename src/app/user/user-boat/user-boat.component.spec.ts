import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBoatComponent } from './user-boat.component';

describe('UserBoatComponent', () => {
  let component: UserBoatComponent;
  let fixture: ComponentFixture<UserBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
