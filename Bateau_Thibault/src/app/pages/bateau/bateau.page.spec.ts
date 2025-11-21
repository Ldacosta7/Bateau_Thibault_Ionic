import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BateauPage } from './bateau.page';

describe('BateauPage', () => {
  let component: BateauPage;
  let fixture: ComponentFixture<BateauPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BateauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
