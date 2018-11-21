import React, { Component } from 'react';

class firstComponent extends Component {
    state = {
        count: 0
    }
    submitHandeler = () => {
        this.setState({
            count: 100
        })


        alert(this.state.count)
    }
    render() {

        return (
            <div>
                <form>
                    <div class='col col-sm-6'>
                        <div class="form-group">
                            <label for="UserID">Employee Name</label>
                            <input type="input" value={this.state.count} class="form-control" id="empId" />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                    </div>


                    <div class='col col-sm-6'>
                        <button type="submit" onClick={this.submitHandeler} class="btn btn-primary">Submit</button>
                    </div>


                </form>



            </div>
        )
    }
}

export default firstComponent