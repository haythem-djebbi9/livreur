import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandecouleurComponent } from './listcommandecouleur.component';

describe('ListcommandecouleurComponent', () => {
  let component: ListcommandecouleurComponent;
  let fixture: ComponentFixture<ListcommandecouleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcommandecouleurComponent]
    });
    fixture = TestBed.createComponent(ListcommandecouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
