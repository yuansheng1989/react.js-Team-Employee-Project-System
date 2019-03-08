import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';
import moment from 'moment';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get("https://web422-team-api.herokuapp.com/projects").then((res) => {
            this.setState({
                projects: res.data
            });
        }).catch((err) => {
            console.log("error")
        });
    }

    render() {
        return (
            <MainContainer sidebar='Projects'>
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((project, index) => {
                            return (
                                <tr key={index}>
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{moment(project.ProjectStartDate).utc().format('LL')}</td>
                                    <td>{project.ProjectEndDate === null ? 'n/a' : moment(project.ProjectEndDate).utc().format('LL')}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </MainContainer>
        );
    }
}

export default Projects;