"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [data,setData] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("/backend/tasks")
    const data = await res.json()
    console.log(data); 
    return data;
  }
  useEffect(() => {
    fetchProducts()
  })

  return (
    <div>
      <h1>Todo App</h1>
      
    </div>
  );
}
