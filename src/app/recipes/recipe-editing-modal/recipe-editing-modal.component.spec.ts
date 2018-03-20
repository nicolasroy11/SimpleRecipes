import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditingModalComponent } from './recipe-editing-modal.component';

describe('RecipeEditingModalComponent', () => {
  let component: RecipeEditingModalComponent;
  let fixture: ComponentFixture<RecipeEditingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
