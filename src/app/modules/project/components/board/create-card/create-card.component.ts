import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Card } from '../../../../../graphql/generated';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  form = this.fb.group({
    title: ['', Validators.required],
    content: [''],
    type: ['story', Validators.required],
    score: ['unscored', Validators.required],
    scoreType: ['feature', Validators.required],
  });

  constructor(private fb: FormBuilder, private dialog: MatDialogRef<Card>) {}

  onSubmit() {
    if (this.form.invalid) return;

    const values = this.form.value;

    this.dialog.close({
      id: (Math.random() * 100000).toString(10),
      title: values.title || '',
      content: values.content || '',
      score: values.score || '',
      scoreType: values.scoreType || '',
      type: values.type || '',
    });
  }
}
