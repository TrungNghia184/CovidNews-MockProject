import React from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { menuController } from "https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js";
import "./index.scss";
window.menuController = menuController;
export default function NavBar() {
  const navigate = useNavigate();
  async function openMenu() {
    await menuController.open();
  }
  function onLogout() {
    localStorage.setItem("token", false);
    navigate("/login");
  }
  return (
    <nav className="navbar">
      {window.screen.width < 768 ? (
        <>
          <ion-menu side="start" content-id="main-content">
            <ion-header color="tertiary">
              <ion-toolbar color="tertiary" translucent>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content color="tertiary">
              <ion-list color="secondary">
                <ion-item>
                  <NavLink className="navbar__links" to="/" end>
                    <ion-icon name="mail" slot="start"></ion-icon>
                    <ion-label>Home</ion-label>
                  </NavLink>
                </ion-item>
                <ion-item>
                  <NavLink className="navbar__links" to="/news" end>
                    <ion-icon name="paper-plane" slot="start"></ion-icon>
                    <ion-label>News</ion-label>
                  </NavLink>
                </ion-item>
                <ion-item>
                  <NavLink className="navbar__links" to="/login" end>
                    <ion-icon name="heart" slot="start"></ion-icon>
                    <ion-label>Sign In/Sign Up</ion-label>
                  </NavLink>
                </ion-item>
                {localStorage.getItem("token") === "true" ? (
                  <button onClick={onLogout}>
                    <ion-icon name="heart" slot="start"></ion-icon>
                    <ion-label>Logout</ion-label>
                  </button>
                ) : (
                  <></>
                )}{" "}
              </ion-list>
            </ion-content>
          </ion-menu>
          <div class="ion-page" id="main-content">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-buttons slot="start">
                  <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
          </div>
        </>
      ) : (
        <>
          <NavLink className="navbar__links" to="/" end>
            Home
          </NavLink>
          <NavLink className="navbar__links" to="/news" end>
            News
          </NavLink>
          <NavLink className="navbar__links" to="/login" end>
            Sign In/ Sign Up
          </NavLink>
          {localStorage.getItem("token") === "true" ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <></>
          )}{" "}
        </>
      )}
      {/* <NavLink className="navbar__links" to="/" end>
          Home
        </NavLink>
        <NavLink className="navbar__links" to="/news" end>
          News
        </NavLink>
        <NavLink className="navbar__links" to="/login" end>
          Sign In/ Sign Up
        </NavLink>
        {(localStorage.getItem("token") === 'true') ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <></>
        )} */}
    </nav>
  );
}
