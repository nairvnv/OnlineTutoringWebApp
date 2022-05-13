import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { TutorSignup, UserSignupAPI } from "../ServerApi";
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeTutor = this.onChangeTutor.bind(this);
    this.onChangeStudent = this.onChangeStudent.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onchangeAboutMe = this.onchangeAboutMe.bind(this);
    // this.onchangeWorkingHour = this.onchangeWorkingHour.bind(this);
    // this.OnclickPassHas = this.OnclickPassHas.bind(this);
    this.onchangeStartTime = this.onchangeStartTime.bind(this);
    this.onchangeEndTime = this.onchangeEndTime.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      student: true,
      tutor: false,
      subject: "",
      aboutMe: "",
      workingHours: "",
      startTime: "",
      endTime: ""

    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeTutor(e) {
    this.setState({
      tutor: e.target.value
    });
  }
  onChangeStudent(e) {
    this.setState({
      student: e.target.value
    });
  }
  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    });
  }
  onchangeAboutMe(e) {
    this.setState({
      aboutMe: e.target.value
    });
  }
  onchangeStartTime(e) {
    this.setState({
      startTime: e.target.value
    });
  }
  onchangeEndTime(e) {
    this.setState({
      endTime: e.target.value
    });

  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      if (this.state.student)
        UserSignupAPI({ username: this.state.username, email: this.state.email, passHash: this.state.password }).then((res) => {
        console.log(res)
      })
      else TutorSignup({ username: this.state.username, email: this.state.email, passHash: this.state.password, aboutMe: this.state.aboutMe, subject: this.state.subject, startTime: this.state.startTime, endTime:this.state.endTime })
    }
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  // validations={[required, vusername]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  // validations={[required, email]}
                  />
                </div>
                <div className="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" checked={this.state.student} id="flexCheckDefault" onChange={() => {
                      this.setState({
                        tutor: !this.state.tutor,
                        student: !this.state.student
                      })
                    }} />
                    <label class="form-check-label" for="flexCheckDefault">
                      Student
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" checked={this.state.tutor} id="flexCheckChecked" onChange={() => {
                      this.setState({
                        tutor: !this.state.tutor,
                        student: !this.state.student
                      })
                    }} />
                    <label class="form-check-label" for="flexCheckChecked">
                      Tutor
                    </label>
                  </div>
                </div>
                {this.state.tutor === true && (
                  <>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChangeSubject}
                        validations={[required]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="aboutMe">AboutMe</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="aboutMe"
                        value={this.state.aboutMe}
                        onChange={this.onchangeAboutMe}
                        validations={[required]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="startTime">Starting hour</label>
                      <input type="time" value={this.state.startTime} onChange={this.onchangeStartTime} className="form-control"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label htmlFor="EndTime">Ending hour</label>
                      <input type="time" value={this.state.endTime} onChange={this.onchangeEndTime} className="form-control"></input>
                    </div>
                    <br></br>
                  </>
                )}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" onClick={this.OnclickPassHas}>Sign Up</button>
                </div>
              </div>
            )}
            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton className="btn btn-primary"
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}