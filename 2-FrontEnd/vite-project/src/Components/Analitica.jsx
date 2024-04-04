import "../Styles/Analitica.css"
import { LineChart } from '@mui/x-charts/LineChart';
import Calendario from "./Calendario";
const  General =() => {

  return (
    <div>
      <div className='div-grafica-containersa'>
          <div className='div-graficaana'>
              <div className='div-grafica-tituloa'>
                <p>Horas totales por mes</p>
              <div className="div-grafica-imagen">
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[{ curve: "linear", data: [2, 5.5, 2, 8.5, 1.5, 5], color: '#2E77BB'  }]}
                />
              </div>
            </div>
          </div>
          
          <div className='div-graficaana'>
              <div className='div-grafica-tituloa'>
                <p>Distribución de usuarios conectados</p>
                <div className="div-grafica-calor">
                  <Calendario/>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default General;
