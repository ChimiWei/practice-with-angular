import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarefasNoiteComponent } from './lista-tarefas-noite.component';

describe('ListaTarefasComponent', () => {
  let component: ListaTarefasNoiteComponent;
  let fixture: ComponentFixture<ListaTarefasNoiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTarefasNoiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTarefasNoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
