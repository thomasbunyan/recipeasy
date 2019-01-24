import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCookbookDialogComponent } from './edit-cookbook-dialog.component';

describe('EditCookbookDialogComponent', () => {
  let component: EditCookbookDialogComponent;
  let fixture: ComponentFixture<EditCookbookDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCookbookDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCookbookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
