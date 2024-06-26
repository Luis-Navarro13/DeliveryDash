const express = require('express')
const router = express.Router()
const middleware = require('../middleware/jwt.middleware')
const { getAlumnosSubscribed,
        getAlumnos,
        getAlumnosFromCurso,
        getAlumnosByMail, 
        getMostStarsSubscribed,
        getMostStarsAll,
        getMostTimeSubscribed,
        getMostTimeAll,
        getTotalAlumnosSubscribed,
        getTotalAlumnosAll,
        getTotalStarsAlumno,
        insertAlumno, 
        deleteAlumnos,
        getTotalAlumnosByGroup,
        getAlumnosByCourse } = require('../controllers/alumnos.controller')

router.get('/alumnos/subscribed', middleware, getAlumnosSubscribed)
router.get('/alumnos', getAlumnos)
router.get('/alumnos/stars', getMostStarsAll)
router.get('/alumnos/time', getMostTimeAll)
router.get('/alumnos/subscribed/total', middleware, getTotalAlumnosSubscribed)
router.get('/alumnos/total', getTotalAlumnosAll)

router.post('/alumnos/byMail', getAlumnosByMail)
router.post('/alumnos/byCurso', middleware, getAlumnosFromCurso)
router.post('/alumnos/subscribed/stars', middleware, getMostStarsSubscribed)
router.post('/alumnos/subscribed/time', middleware, getMostTimeSubscribed)
router.post('/alumnos/total/curso', middleware, getTotalAlumnosByGroup)
router.post('/alumnos/stars/byAlumno', getTotalStarsAlumno)
router.post('/alumnos', insertAlumno)
router.post('/alumnos/delete', middleware, deleteAlumnos)
router.post('/alumnos/total/curso/info', middleware, getAlumnosByCourse)

module.exports = router