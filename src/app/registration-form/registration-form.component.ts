import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Team } from '../models/Team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  // Declare required variables
  teamFormGroup!: FormGroup;
  teamObject: Team = new Team();
  // message is to display message
  message!: string;
  teams!: Team[];

  // Method to execute on submitting form
  onSubmit(onSubmit: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private cont: FormBuilder, private service: TeamService, private router: Router) { }

  // Create a new form group onInit
  ngOnInit(): void {
    this.teamFormGroup = new FormGroup({
      player: new FormControl('', [Validators.required]),
      teamName: new FormControl('', [Validators.required])
    });
  }


  // Post new player to json server by making POST request and reset form once sucessful post operation
  postNewPlayer() {
    console.log('formValue', this.teamFormGroup.value);
    this.teamObject.player = this.teamFormGroup.value.player;
    this.teamObject.teamName = this.teamFormGroup.value.teamName;
    // post Api
    this.service.addPlayer(this.teamObject).subscribe((result) => {
      this.message = 'Player added';
      this.teamFormGroup.reset();
    });
  }

}
