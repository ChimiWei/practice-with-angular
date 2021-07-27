import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTituloComponent } from './lista-titulo.component';

describe('ListaTituloComponent', () => {
  let component: ListaTituloComponent;
  let fixture: ComponentFixture<ListaTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
