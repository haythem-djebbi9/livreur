import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandeproduitComponent } from './listcommandeproduit.component';

describe('ListcommandeproduitComponent', () => {
  let component: ListcommandeproduitComponent;
  let fixture: ComponentFixture<ListcommandeproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcommandeproduitComponent]
    });
    fixture = TestBed.createComponent(ListcommandeproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
