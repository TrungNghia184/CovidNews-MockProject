import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
export default function HomePage() {
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
      <h1 className="text-3xl font-bold underline bg-red-500" >CovidGlobal</h1>
  );
}
