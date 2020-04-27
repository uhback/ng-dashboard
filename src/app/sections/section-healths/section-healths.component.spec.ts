import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHealthsComponent } from './section-healths.component';

describe('SectionHealthsComponent', () => {
  let component: SectionHealthsComponent;
  let fixture: ComponentFixture<SectionHealthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHealthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHealthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
