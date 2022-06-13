import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { of } from 'rxjs';import { Team } from '../models/Team';

import { TeamSearchComponent } from './team-search.component';
import { TeamService } from '../services/team.service';
import { HttpTestingController } from '@angular/common/http/testing';


const teams: Team[] = [
  {
    teamName: "Boston Celtics",
    player: "Matt Ryan",
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

describe('TeamSearchComponent', () => {
  let component: TeamSearchComponent;
  let fixture: ComponentFixture<TeamSearchComponent>;
  let service: TeamService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
      ],
      declarations: [ TeamSearchComponent, SearchPipe ],
      providers: [TeamService]
    })
    .compileComponents();
    service = TestBed.inject(TeamService);
    spyOn(service, 'getAllTeams').and.returnValue(of(teams));
    spyOn(service, 'addPlayer').and.returnValue(of(teams));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check getAllInventories is called in ngOnInit or not
  it('ngOnInit() should call Service to getAllTeams ', () => {
    component.ngOnInit();
    expect(service.getAllTeams).toHaveBeenCalled();
  });
});
