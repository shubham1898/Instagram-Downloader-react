import React, { Component } from 'react'


export default class Contact extends Component {
    render() {
        return (
            <div>
                <div class="card  text-center">
                    <div class="card-header bg-success">
                        Contacts
  </div>
                    <div class="card-body bg-light-gray">
                        {/* <h5 class="card-title">Email</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a href="mailto: kumarshubham1898@gmail.com?subject = Feedback" class="btn btn-primary mb-1"><i class="fa fa-envelope" aria-hidden="true"></i> Gmail</a>
                        <div></div>
                        <a href="https://www.github.com/shubham1898" class="btn btn-dark"><i class="fa fa-github-square" aria-hidden="true"></i> GitHub</a>
                    </div>
                    <div class="card-footer text-muted">
                       contact for suggestion and Feedback Contibutions
  </div>
                </div>
            </div>
        )
    }
}


