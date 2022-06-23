import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import NavBar from "../../components/navBar";
import NewsItems from "../../components/newsItems";
export default function HomePage() {
  const [newsList, setNewsList] = useState([1,2,3]);
  async function getNews() {
    const rawNewsData = await fetch(
      "https://corona--tracker.herokuapp.com/newslist?_page=1&_limit=12 "
    );
    let refinedData = await rawNewsData.json();
    setNewsList(refinedData)
  }
  useEffect(() => {
    getNews()
  }, []);
  return (
    <ion-app>
      <ion-header translucent>
        <ion-toolbar>
          <NavBar />
        </ion-toolbar>{" "}
      </ion-header>
      <ion-content fullscreen>
        <NewsItems newsList={newsList}/>
      </ion-content>
    </ion-app>
  );
}
