import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarefaDialogComponent } from './edit-tarefa-dialog.component';

describe('EditTarefaDialogComponent', () => {
  let component: EditTarefaDialogComponent;
  let fixture: ComponentFixture<EditTarefaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTarefaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarefaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
