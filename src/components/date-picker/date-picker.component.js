import React, { Component } from 'react';
import './date-picker.component.css';

import { updateDateOfBirth, updateEnrollmentDate } from '../../actions';

import { g } from '../../assets/scripts/utils';

export default class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = this.props.store.getState().editor;
    }

    componentWillReceiveProps() {
        this.setState({ ...this.props.store.getState().editor });
    }

    handleChange = (e) => {

        e.preventDefault();
        
        switch(g('#'+e.target.id).closest('.DatePicker').id) {

            case 'date-of-birth':
                let newDateOfBirth = {
                        day: e.target.id === 'date-of-birth-day' ? 
                            e.target.value :
                            this.state.dateOfBirth.day,
                        month: e.target.id === 'date-of-birth-month' ? 
                            e.target.value :
                            this.state.dateOfBirth.month,
                        year: e.target.id === 'date-of-birth-year' ? 
                            e.target.value :
                            this.state.dateOfBirth.year,
                    }
                this.store.dispatch(updateDateOfBirth(newDateOfBirth));
            break;

            case 'enrollment-date':
                let newEnrollmentDate = {
                        day: e.target.id === 'enrollment-date-day' ? 
                            e.target.value :
                            this.state.enrollmentDate.day,
                        month: e.target.id === 'enrollment-date-month' ? 
                            e.target.value :
                            this.state.enrollmentDate.month,
                        year: e.target.id === 'enrollment-date-year' ? 
                            e.target.value :
                            this.state.enrollmentDate.year,
                    }
                this.store.dispatch(updateEnrollmentDate(newEnrollmentDate));
            break;
        }
    }

    render() {
        return (
            <div className="DatePicker" id={this.props.id} onChange={this.handleChange}> 
                <select 
                    className="DatePicker__Day" name="" id={this.props.id+'-day'}
                    value={
                        this.props.id === 'enrollment-date' ?
                        this.state.enrollmentDate.day :
                        this.state.dateOfBirth.day
                    }
                >
                    {
                    this.props.id === 'enrollment-date' ?
                    <option value="--">--</option> :
                    null
                    }
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select 
                    className="DatePicker__Month" name="" id={this.props.id+'-month'}
                    value={
                        this.props.id === 'enrollment-date' ?
                        this.state.enrollmentDate.month :
                        this.state.dateOfBirth.month
                    }
                >
                    {
                    this.props.id === 'enrollment-date' ?
                    <option value="--">--</option> :
                    null
                    }
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <input 
                    className="DatePicker__Year" type="text" id={this.props.id+'-year'}
                    value={
                        this.props.id === 'enrollment-date' ?
                        this.state.enrollmentDate.year :
                        this.state.dateOfBirth.year
                    }
                />
            </div>
        );
    }

}