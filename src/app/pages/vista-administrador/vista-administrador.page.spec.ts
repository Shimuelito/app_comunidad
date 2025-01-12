import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaAdministradorPage } from './vista-administrador.page';

describe('VistaAdministradorPage', () => {
  let component: VistaAdministradorPage;
  let fixture: ComponentFixture<VistaAdministradorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
