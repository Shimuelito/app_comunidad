import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaArrendatarioPage } from './vista-arrendatario.page';

describe('VistaArrendatarioPage', () => {
  let component: VistaArrendatarioPage;
  let fixture: ComponentFixture<VistaArrendatarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaArrendatarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
