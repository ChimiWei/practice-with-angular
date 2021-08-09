import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarefa } from '../shared/tarefa.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-tarefa-dialog',
  templateUrl: './edit-tarefa-dialog.component.html',
  styleUrls: ['./edit-tarefa-dialog.component.scss']
})
export class EditTarefaDialogComponent implements OnInit {
  validationErrors: boolean = false;
  painelToggle: boolean = false;

  constructor(public dialogRef: MatDialogRef<EditTarefaDialogComponent>, @Inject(MAT_DIALOG_DATA) public tarefa: Tarefa) { }

  ngOnInit(): void {
  }

  OnFormSubmit(form: NgForm) {

    if(form.invalid) {
      this.validationErrors = true
      return 
    }

    const updatedTarefa = {
      ...this.tarefa,
      ...form.value
    }

    this.dialogRef.close(updatedTarefa)
  }

  close() {
    this.dialogRef.close()

  }

}
