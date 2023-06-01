import React from "react"
import { PropType } from "react"
import { Task } from "../models/task"

const LIST=({list}) =>{
    return (
        <div>
            <h1>
                Nombre{list.name}
            </h1>
            <h2>
                Apellido{list.lastname}
            </h2>
            <h3>
                Email{list.email}
            </h3>
            <h3>
                Conectado {list.connected}
            </h3>
            
    
        </div>
        )
}

LIST.propTypes = {
    list: PropType.instanceOf(Task).isRequired,
}
export default LIST;