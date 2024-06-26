import "../Styles/AgregarUsuario.css"
import { useRef,useState } from 'react'

const  AgregarUsuario = ({handleClickAdd}) => {
    const agregarForm = useRef(null)
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleCloseModal2 = () => {
        setModalVisible(false);
        setMyVar(1)
        handleClickAdd(3)
    };
    const handleOnSubmit = async (evt) =>{
        evt.preventDefault() 
        const form = new FormData(agregarForm.current)
        const reponse = await fetch('http://deliverydashapi-env.eba-i3jft8cm.us-east-1.elasticbeanstalk.com/cursos',{
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
            },
            body: form
            })
        const data = await reponse.json()
        if(data.mensaje){
            console.log(data.mensaje)
            console.log(myVar)
            setMyVar(2);
            handleClickAdd(2)
        }
    }
    const [myVar, setMyVar] = useState(1);
    return (
    <>
        {myVar === 1 ? (
        <div>
            <a href="#openModal" className="modalAgregarAC" onClick={handleOpenModal}>Agregar Curso</a>
    
            <div id="openModal" className="modalDialogAC">
                <div>
                    <a href="#close" title="Close" className="closeAC" onClick={handleCloseModal}>X</a>
                    <h2>Agregar Curso</h2>
                    <form className="formagregar" onSubmit={handleOnSubmit} ref={agregarForm}>
                        <p>Nombre</p>
                        <input name="nombre"></input>
                        <p>Fecha inicio</p>
                        <input type="date" name="dateInicio"></input>
                        <p>Fecha Final</p>
                        <input type="date" name="dateFinal"></input>
                        <div className="div-boton-modal">
                            <button className="formagregarbutton" type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        ) : (
        <div>
            <a href="#openModal3" className="modalAgregarAC" onClick={handleOpenModal}>Agregar Curso</a>
    
            <div id="openModal3" className="modalDialogAC">
                <div>
                    <a href="#close" title="Close" className="closeAC" onClick={handleCloseModal2}>X</a>
                    <p>Curso agregado correctamente</p>
                </div>
            </div>
        </div>
        )}
    </>
    )
}

export default AgregarUsuario;
