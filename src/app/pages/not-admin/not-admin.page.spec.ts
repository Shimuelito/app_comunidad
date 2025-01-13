import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotAdminPage } from './not-admin.page';

describe('NotAdminPage', () => {
  let component: NotAdminPage;
  let fixture: ComponentFixture<NotAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
