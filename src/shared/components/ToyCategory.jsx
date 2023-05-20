import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ToyCategory = () => {

    const [toys, setToys] = useState([]);
    const [id, setId] = useState("marvel");
    const handleCategory =(id)=>{
        setId(id);
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/toysCategory/${id}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[id])
    console.log(toys)
  return (
    <div className="text-center">
        <h1 className="text-5xl font-bold my-10">Which Toy Are You looking for? {toys.length}</h1>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab  onClick={()=>handleCategory("marvel")}>Marvel Universe Toys</Tab>
          <Tab onClick={()=>handleCategory("dc")}>DC Universe Toys</Tab>
          <Tab onClick={()=>handleCategory("transformer")}>Transformer Toys</Tab>
        </TabList>

        <TabPanel >
          <div className="grid grid-cols-1 md:grid-cols-3">
          {
            toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3">
        {
            toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
          } </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3">
        {
            toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
          } </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyCategory;
