import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialAdminPage } from './historial-admin.page';

describe('HistorialAdminPage', () => {
  let component: HistorialAdminPage;
  let fixture: ComponentFixture<HistorialAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
