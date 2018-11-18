import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbooksComponent } from './cookbooks.component';

describe('CookbooksComponent', () => {
  let component: CookbooksComponent;
  let fixture: ComponentFixture<CookbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
