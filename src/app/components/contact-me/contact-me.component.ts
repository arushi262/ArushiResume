import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  constructor() {}

  ngOnInit(): void {}

  SubmitMessage(contactFormValues: any): void {
    console.log(contactFormValues);
  }
}
