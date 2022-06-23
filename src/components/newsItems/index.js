import React from "react";
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
import "./index.scss"
export default function NewsItems(props) {
  console.log(props.newsList);
  return (
    <div className="news-container">
      {props.newsList.map((newsListItem, i) => {
        return (
            <ion-card href={newsListItem.url} color='medium'>
              <img src={newsListItem.urlToImage} />
              <ion-card-header>
                <ion-card-subtitle>
                  {newsListItem.source?.name}
                </ion-card-subtitle>
                <ion-card-title>{newsListItem.title}</ion-card-title>
              </ion-card-header>
              <ion-card-content>{newsListItem.description}</ion-card-content>
            </ion-card>
        );
      })}
    </div>
  );
}
// author: "Matt Simon"
// content: "When last springs lockdown quieted the Penn State campus and surrounding town of State College, a jury-rigged instrument was listening. A team of researchers from the university had tapped into an un… [+3564 chars]"
// description: "Vibrations from cars and pedestrians create unique signals in cables. Now scientists have used the trick to show how Covid-19 brought life to a halt."
// publishedAt: "2021-06-28T16:00:00Z"
// source: {id: 'wired', name: 'Wired'}
// title: "How Underground Fiber Optics Spy on Humans Moving Above"
// url: "https://www.wired.com/story/how-underground-fiber-optics-spy-on-humans-moving-above/"
// urlToImage: "https://media.wired.com/photos/60d5f9a6a069f13cc7c034c4/191:100/w_1280,c_limit/science_fiberoptic_541379892.jpg"
