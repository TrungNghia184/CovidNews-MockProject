import { toastController } from "@ionic/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "./index.scss";
import "../../i18n";
import DataTable from "../../components/dataTable";
import NumberDisplayBox from "../../components/smallComponents/numberDisplayBox";
// import Selector from "../../components/selector";
// import LineChart from "../../components/charts/lineChart";
// import MapChart from "../../components/charts/mapChart";
export default function HomePage() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");
  const selectedLanguage = useSelector((state) => state.global.language);
  const [totalCovidData, setTotalCovidData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [ countries, setCountries] = useState([]);
  const [ selectedCountries, setSelectedCountries ] = useState('');
  const [ selectedCountriesData, setSelectedCountriesData ] = useState([]);
  async function getTotalData() {
    const rawTotalData = await fetch("https://disease.sh/v3/covid-19/all ");
    let refinedData = await rawTotalData.json();
    console.log(refinedData);
    setTotalCovidData([
      refinedData?.cases,
      refinedData?.recovered,
      refinedData?.deaths,
    ]);
  }
  
  useEffect(() => {
    getTotalData();
  }, []);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((result) => result.json())
      .then((data) => setTableData(data))
      .then(console.log(tableData));
  }, []);
  useEffect(() => {
    fetch("https://api.covid19api.com/countries")
      .then((result) => result.json())
      .then((data) => setCountries(data))
  }, []);
  useEffect(() => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);
  function handleOnChange(e) {
    setSelectedCountries(e.target.value);
    fetch(`https://api.covid19api.com/dayone/country/${e.target.value}`)
      .then((result) => result.json())
      .then((data) => setSelectedCountriesData(data))
  }
  return (
    <div id="homePage">
      <div className="totalNumber">
        <h2>CovidGlobal</h2>
        <div className="totalNumber__each">
          <NumberDisplayBox
            header={"Confirmed cases"}
            number={totalCovidData[0]}
          />
          <NumberDisplayBox
            header={"Recovered cases"}
            number={totalCovidData[1]}
          />
          <NumberDisplayBox
            header={"Deaths cases"}
            number={totalCovidData[2]}
          />
        </div>
      </div>
      <div className="countryNumber">
        <DataTable rowData={tableData} />
      </div>
      <div className="totalChart" id="chartContainer">
        {/* <Selector countries={countries} handleOnChange={handleOnChange}/> */}
        {/* <LineChart data={selectedCountriesData}/> */}
        {/* <MapChart/> */}
      </div>
    </div>
  );
}

// const columnDefs = ;

