import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBannersComponent } from './admin-banners.component';

describe('AdminBannersComponent', () => {
  let component: AdminBannersComponent;
  let fixture: ComponentFixture<AdminBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
