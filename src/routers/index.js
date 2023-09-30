import { Router } from 'express';

const router= Router()

router.get('/', (req, res) => res.render('index'));

router.get('/contacto', (req, res) => res.render('contacto'));

router.get('/ProductoDetalle', (req, res) => res.render('ProductoDetalle'));

export default router