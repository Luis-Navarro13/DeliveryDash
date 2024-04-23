import "../Styles/Analitica.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Calendario from "./Calendario";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const  Analitica =() => {
  const { id } = useParams();
  const [nc,setNc] = useState([]);
  useEffect(() => {
    fetch('https://e0foiighd7.execute-api.us-east-1.amazonaws.com/nivelescompletados/horas/mes', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
      },
    })
      .then(data => data.json())
      .then((data) => {
        setNc(data)
      })
  }, [id]);
  return (
    <div>
      <div className='div-grafica-containersa'>
        <div className='div-graficaana'>
          <div className="div-grafica-calor">
            <div className="div-grafica-tituloa">
              <p>Horas totales por mes</p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={nc} margin={{ right: 100}}>
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="minutos" stroke="#2E77BB" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
          
        <div className='div-graficaana'>
            <div className="div-grafica-calor">
              <div className="div-grafica-tituloa">
                <p>Distribución de usuarios conectados</p>
                <Calendario/>
                <div className="linea-gradiante"></div>
                <div className="leyendalinea">
                  <p>1</p>
                  <p>100</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Analitica;
