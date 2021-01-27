import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtroumpfsComponent } from './schtroumpfs.component';

describe('SchtroumpfsComponent', () => {
  let component: SchtroumpfsComponent;
  let fixture: ComponentFixture<SchtroumpfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchtroumpfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchtroumpfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
