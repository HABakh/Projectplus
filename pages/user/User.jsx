import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Modifier l'utilisateur</h1>
        <Link to="/dashdirecteur/newUser">
          <button className="userAddButton">Créer</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Hamza BAKHTI </span>
              <span className="userShowUserTitle">IIR Etudiant </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Détails du compte
</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcons" />
              <span className="userShowInfoTitle">Hamza BAKH </span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcons" />
              <span className="userShowInfoTitle">03.01.2001</span>
            </div>
            <span className="userShowTitle">Détails du contact</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcons" />
              <span className="userShowInfoTitle">+212623933751</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcons" />
              <span className="userShowInfoTitle">bakhtih46@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcons" />
              <span className="userShowInfoTitle">Oujda | Morroco</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Éditer</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Hamza"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nom d'utilisateur
</label>
                <input
                  type="text"
                  placeholder="Hamza BAKHTI"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>E-mail</label>
                <input
                  type="text"
                  placeholder="bakhtih46@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Téléphoner</label>
                <input
                  type="text"
                  placeholder="+212 623 933 751"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adresse</label>
                <input
                  type="text"
                  placeholder="Oujda | Morocco"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg"
                  alt=""
                
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Mettre à jour</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
