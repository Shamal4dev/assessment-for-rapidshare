import { Redirect } from "react-router-dom";
import "./UserInfoPage.css";

export const UserInfoPage = (props) => {
  
  const content = props.location.user && (
    <div className="user-info">
      <div className="bussiness-card">
        <table>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>{props.location.user.user.name}</td>
            </tr>
            <tr>
              <td>Phone :</td>
              <td>{props.location.user.user.phone}</td>
            </tr>
            <tr>
              <td>Company Name :</td>
              <td>{props.location.user.user.company.name}</td>
            </tr>
            <tr>
              <td rowSpan="4" valign="top">
                Address :
              </td>
              <td>{props.location.user.user.address.suite}</td>
            </tr>
            <tr>
              <td>{props.location.user.user.address.street}</td>
            </tr>
            <tr>
              <td>{props.location.user.user.address.city}</td>
            </tr>
            <tr>
              <td>{props.location.user.user.address.zipcode}</td>
            </tr>
            <tr>
              <td>Website :</td>
              <td>{props.location.user.user.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );

  const redirect = <Redirect to="/users" />;

  return <div>
  {props.location.user ? content : redirect}</div>;
};
