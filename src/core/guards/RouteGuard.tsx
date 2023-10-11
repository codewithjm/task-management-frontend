import {Navigate} from "react-router-dom";
import React from "react";


interface RouteGuardModel{
    component : any;
}

const RouteGuard : React.FC<RouteGuardModel> = ({component}) =>{
    
    // place the authentication  conditions here
    if(true){
        return component;
    }else{
        return <Navigate to={'not-authenticated'}/>;
    }
}


export  default RouteGuard;