import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAccordinComponent } from './tabs-accordin.component';

describe('TabsAccordinComponent', () => {
  let component: TabsAccordinComponent;
  let fixture: ComponentFixture<TabsAccordinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsAccordinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAccordinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
