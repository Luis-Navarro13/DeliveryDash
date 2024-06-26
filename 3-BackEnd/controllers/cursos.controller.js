const pool = require('../helpers/mysql-config')

// Info de todos los cursos
const getCursos = (req, res) => {
    const sql = `SELECT * FROM Cursos`
    pool.query(sql, (err, results, fields) => {
        if (err) res.json(err)
        res.json(results)
    })
}

// Info de todos los cursos que tiene el profesor
const getCursosByProfesor = (req, res) => {
    const { profesorID } = req.body
    const sql = `SELECT DISTINCT C.*
                 FROM Cursos C
                 JOIN Inscripciones I ON C.cursoID = I.cursoID
                 JOIN Profesores P ON I.profesorID = P.profesorID
                 WHERE P.profesorID = ?`

    pool.query(sql, [profesorID], (err, results, fields) => {
        if (err) res.json(err)
        res.json(results)
    })
}

// Agregar un curso
const insertCurso = (req, res) => {
    const { dateInicio, dateFinal, nombre } = req.body
    const sql = `INSERT Cursos(dateInicio, dateFinal, nombre)
                 VALUES(?, ?, ?)`

    let result
    pool.query(sql, [dateInicio, dateFinal, nombre], (err, results, fields) => {
        if (err) res.json(err)
        result = { status: 200, mensaje: 'Curso agregado correctamente' }
        res.json(result)
    })
}

// Borrar varios cursos por su id
const deleteCursos = (req, res) => {
    const { ids } = req.body
    const sql = `CALL deleteCursos(?)`

    pool.query(sql, [ids], (err, results, fields) => {
        if (err) res.json(err)
        res.json({ status: 200, mensaje: `Cursos ${ids} borrados correctamente` })
    })
}

module.exports = { getCursos, getCursosByProfesor, insertCurso, deleteCursos }