import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultasArrendatarioPage } from './consultas-arrendatario.page';

describe('ConsultasArrendatarioPage', () => {
  let component: ConsultasArrendatarioPage;
  let fixture: ComponentFixture<ConsultasArrendatarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasArrendatarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
