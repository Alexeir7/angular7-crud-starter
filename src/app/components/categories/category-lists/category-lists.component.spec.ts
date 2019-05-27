import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListsComponent } from './category-lists.component';

describe('CategoryListsComponent', () => {
  let component: CategoryListsComponent;
  let fixture: ComponentFixture<CategoryListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
