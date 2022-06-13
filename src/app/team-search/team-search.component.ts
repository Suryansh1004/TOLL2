import { Component, OnInit } from '@angular/core';
import { Team } from '../models/Team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {
  searchText = '';
  teams: Team[] = [];
  constructor(private service: TeamService) { }

  // Get all team details by making GET request to json server
  ngOnInit(): void {
    this.service.getAllTeams().subscribe(
      data => {
        this.teams = data;
      });
  }

}