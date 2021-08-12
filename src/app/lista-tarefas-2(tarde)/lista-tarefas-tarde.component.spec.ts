import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarefasTardeComponent } from './lista-tarefas-tarde.component';

describe('ListaTarefasComponent', () => {
  let component: ListaTarefasTardeComponent;
  let fixture: ComponentFixture<ListaTarefasTardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTarefasTardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTarefasTardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
