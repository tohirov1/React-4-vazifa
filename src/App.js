import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    users: [
      {
        name: "Ahmad",
        name2: "Javohir",
        name3: "Temur",
      },
    ],
    users1: [
      {
        name: "Dilshod",
        name2: "Hasan",
        name3: "Bekzod",
      }
    ]
  };
  activBtn=(item,index)=> {
     const {users,users1,} = this.state
      users1.push(item)
      users.splice(index,1)
      this.setState({
        users1,
        users
      })
  }
  creatBtn=(item,index)=> {
     const {users,users1,} = this.state
      users.push(item)
      users1.splice(index,1)
      this.setState({
        users1,
        users
      })
  }
  render() {
     const {users,users1,name,name2,name3} = this.state
    return <>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6">
               {
                users.map((item,index) => {
                return <div className="card">
                    <button onClick={()=>this.activBtn(item,index)} className="btn btn-success">Active</button>
                    <div className="card-header">
                      {item.name}
                    </div>
                    <div className="card-header">
                      {item.name2}
                    </div>
                    <div className="card-header">
                      {item.name3}
                    </div>
                  </div>
                })
               }
            </div>
            <div className="col-md-6">
              {
                users1.map((item,index) => {
                  return <div className="card">
                    <button onClick={()=>this.creatBtn(item,index)} className="btn btn-danger">creat</button>
                    <div className="card-header">
                      {item.name}
                    </div>
                    <div className="card-header">
                      {item.name2}
                    </div>
                    <div className="card-header">
                      {item.name3}
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
    </>;
  }
}
export default App;
