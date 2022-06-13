import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/Team';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {}

  // Implement addPlayer method using HttpClient for  saving a player details
  addPlayer(team: Team): Observable<any> {
    return this.http.post(
      environment.API,
      {
        player: team.player,
        teamName: team.teamName
      },
      httpOptions
    );
  }

  // Implement getAllTeams method using HttpClient to get all Team details
  getAllTeams(): Observable<any> {
    return this.http.get(environment.API);
  }
}
