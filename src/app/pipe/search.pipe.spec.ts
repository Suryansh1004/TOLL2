import { Team } from '../models/Team';
import { SearchPipe } from './search.pipe';

const pipe = new SearchPipe();
const team: Team[] = [
  {
    teamName: "Mumbai Indians",
    player: "Malinga",
  },
  {
    teamName: "New York Knicks",
    player: "Obi Toppin",
  },
  {
    teamName: "Indiana Pacers",
    player: "Gabe York",
  }
];

describe('SearchPipe', () => {

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // testing the search pipe based on Player
  it('transform() should return result based on player', () => {
    const result: Team[] = [{
      teamName: "New York Knicks",
      player: "Obi Toppin",
    },
    {
      teamName: "Indiana Pacers",
      player: "Gabe York",
    }];
    expect(new SearchPipe().transform(team, 'York')).toEqual(result);
  });

  // testing the search pipe based on Team Name 
  it('transform() should return result based on Team Name', () => {
    const result: Team[] = [
    {
      teamName: "Boston Celtics",
      player: "Matt Ryan",
    }];
    expect(new SearchPipe().transform(team, 'boston')).toEqual(result);
  });

  // testing the search pipe 
  it('transform() should return null when no match', () => {
    const result: Team[] = [];
    expect(new SearchPipe().transform(team, 'abc')).toEqual(result);
  });

});
