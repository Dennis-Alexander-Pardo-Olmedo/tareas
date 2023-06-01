import React from "react"
import { Task } from "../models/task"
import { CONNECTES } from "../models/personalinformation "
import LIST from "../datas/LIST"


const CONTECLIST = () =>{

    const defaultList = new Task ('JUAN' , 'PERES','dennisalexander11222@gmail.com',true,CONNECTES.CONECTADO )
    return(
        <div>
            <LIST task={defaultList} />
        </div>
    )
}

export default CONTECLIST

