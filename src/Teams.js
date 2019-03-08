import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';

class Teams extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get("https://web422-team-api.herokuapp.com/teams").then((res) => {
            this.setState({
                teams: res.data
            });
        }).catch((err) => {
            console.log("error")
        });
    }

    render() {
        return (
            <MainContainer sidebar='Teams'>
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, index) => {
                            return (
                                <tr key={index}>
                                    <td>{team.TeamName}</td>
                                    <td>
                                        <ul>
                                            {team.Projects.map((project, index) => {
                                                return (
                                                    <li key={index}>{project.ProjectName}</li>
                                                );
                                            })}
                                        </ul>
                                    </td>
                                    <td>{team.Employees.length} Employees</td>
                                    <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </MainContainer>
        );
    }
}

export default Teams;