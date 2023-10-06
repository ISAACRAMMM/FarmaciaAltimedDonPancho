import express from "express";
import { Router } from 'express';



const router= Router()

import pool from "../database/conexion.js";




//router.get('/', (req, res) => res.render('index'));

router.get('/contacto', (req, res) => res.render('contacto'));

router.post('/ProductoDetalle',async (req, res) =>{
    const IdSubcategoria= req.body.IdSubcategoria;
    const resultadoDetalleSubcategoria= await getDetalleSubcategorias(IdSubcategoria);
    //console.log(resultadoDetalleSubcategoria);
    res.render('ProductoDetalle', {resultadoDetalleSubcategoria:resultadoDetalleSubcategoria} );

} );









router.get('/',async (req, res) => {
    try {
        //se realizan todas las consultas necesarias
        const resultadoCategorias= await getCategorias();
        const resultadoSubcategorias= await getSubcategorias();


        res.render('index', {
            resultadoCategorias: resultadoCategorias,
            resultadoSubcategorias: resultadoSubcategorias
        });

    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});



//consultas SQL

const getCategorias= async()=>{
    try {
        const resultadoCategorias = await pool.query("SELECT * FROM \"Categorias\";"); 
        const filas = resultadoCategorias.rows;
        
         
        //console.log(filas);
        
        return filas;
    } catch (error) {
        console.log(error);
    } 
}

const getSubcategorias= async()=>{
    try {
        const resultado = await pool.query("SELECT * FROM \"Subcategorias\";"); 
        const filas = resultado.rows;
        
       // console.log(filas);
        
        return filas;
    } catch (error) {
        console.log(error);
    } 
}


const getDetalleSubcategorias= async(IdSubcategoria)=>{
    try {
        const resultado = await pool.query("SELECT * FROM \"Subcategorias\" WHERE \"IdSubcategoria\"=$1;", [IdSubcategoria]); 
        const filas = resultado.rows;
        
       // console.log(filas);
        
        return filas;
    } catch (error) {
        console.log(error);
    }
}

//funcion para redirigir a categoria
function submitForm() {
    document.forms[0].submit(); // Envía el primer formulario en la página (puedes ajustar el índice si hay varios formularios)
  }
  

export default router
