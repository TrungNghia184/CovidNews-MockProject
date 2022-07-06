import { toastController } from "@ionic/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
export default function HomePage() {
  const { t } = useTranslation(["home"]);
  async function getTotalData() {
    const rawTotalData = await fetch(
      "https://disease.sh/v3/covid-19/all "
    );
    let refinedData = await rawTotalData.json();
   console.log(refinedData)
  }
  useEffect(() => {
    getTotalData()
  }, []);
  return (
      <div id="homePage">
        {t("home")}
      </div>
  );
}
