import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../models/Team';

@Pipe({
  name: 'search'
})

// Implement logic to filter the given Inventory based on given searchText
// Convert text to lowercase
export class SearchPipe implements PipeTransform {

  transform(teams: Team[], searchText: any): any {
    if (searchText == null) {
      return teams;
    }
    return teams.filter( (team) => {
      return team.player.toLowerCase().includes(searchText.toLowerCase())
      || team.teamName.toLowerCase().includes(searchText.toString().toLowerCase());
    });
  }


}
