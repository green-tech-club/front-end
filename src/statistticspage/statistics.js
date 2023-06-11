<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState,useEffect, useRef } from 'react';
>>>>>>> 7de5e796c8322e7882c85c1758c6248bff86959a
import Navbar from '../homepage/navbar/navbar';
import '../App.css';
import Footer from '../homepage/footer/footer';
import {motion} from "framer-motion";
<<<<<<< HEAD

function StatisticsPage(){

return(
    <motion.div
  initial={{ opacity: 0 , x:20}}
  animate={{ opacity: 1 , x:0 }}
  transition={{ ease: "easeOut", duration: 0.5}}>




=======
import { ComposableMap, Geographies, Geography, Annotation , ZoomableGroup} from "react-simple-maps";
import { styled } from "@emotion/styled";
import Frame from 'react-frame-component';
import { Line } from 'react-chartjs-2';
import { Chart } from 'react-google-charts';

const SankeyDiagram = () => {
  const data = [
    ['From', 'To', 'Weight'],
    ['data', 'Y', 10],
    ['data', 'X', 10],
    ['A', 'Y', 7],
    ['B', 'X', 3],
    ['B', 'Y', 2],
  ];
  return (
    <Chart
      width={'80%'}
      height={'400px'}
      chartType="Sankey"
      loader={<div>Loading Chart</div>}
      margin="auto"
      data={data}
      options={{
        sankey: {
          node: {
            colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c', '#e31a1c'],
          },
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

function StatisticsPage(){

  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


  
return (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ ease: "easeOut", duration: 0.5 }}
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Adjust the height as needed
    }}
  >
    
    
   
      
    <ComposableMap
        style={{ margin: 'auto' }}
        projection='geoMercator'
        projectionConfig={{
          scale: 80,
        }}
      >
        <ZoomableGroup center={[0, 0]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{ fill: 'red', strokeWidth: 1, stroke: 'black' }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    
      

<div>
      <h1>Financial Flow Chart</h1>
      <SankeyDiagram />
    </div>
>>>>>>> 7de5e796c8322e7882c85c1758c6248bff86959a


<Footer></Footer>
<Navbar></Navbar>
</motion.div>
);
}
export default StatisticsPage;