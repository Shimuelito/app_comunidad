import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BandejaAdminPage } from './bandeja-admin.page';

describe('BandejaAdminPage', () => {
  let component: BandejaAdminPage;
  let fixture: ComponentFixture<BandejaAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
