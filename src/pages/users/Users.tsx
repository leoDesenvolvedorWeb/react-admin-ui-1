// import Single from "../../components/single/Single"
// import { singleUser } from "../../data"
import "./users.scss"

const User = () => {

  //Fetch data and send to Single Component
  //npm install @mui/x-data-grid
  //npm add @mui/material @emotion/react @emotion/styled
  return (
    <div className="user">
      <div className="info">
        <h1>User</h1>
        <button>Add New User</button>
      </div>
    </div>
  )
}

export default User
