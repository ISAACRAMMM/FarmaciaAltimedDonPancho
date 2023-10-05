import express from "express";
import { Router } from 'express';
import pkg from "pg";


const router= Router()

//import pool from "../database/conexion.js";


const { Pool } = pkg;

const configDB = {
  user: "postgres",
  host: "localhost",
  password: "1234",
  database: "Farmacia_altimed",
  port: "5432",
};

const pool = new Pool(configDB);


//router.get('/', (req, res) => res.render('index'));

router.get('/contacto', (req, res) => res.render('contacto'));

router.get('/ProductoDetalle', (req, res) => res.render('ProductoDetalle'));



const getCategorias= async()=>{
    try {
        const resultado = await pool.query("SELECT * FROM \"Categorias\";"); 
        const filas = resultado.rows;
         
        console.log(filas);
        
        return filas;
    } catch (error) {
        console.log(error);
    } 
}
//console.log(getCategorias);
router.get('/',async (req, res) => {
    try {
      const resultado= await getCategorias();
        console.log(resultado);
        res.render('index', { resultado: resultado});

    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});


export default router
