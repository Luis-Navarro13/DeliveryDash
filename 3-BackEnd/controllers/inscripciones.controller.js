const pool = require('../helpers/mysql-config')

const getInscripciones = (req, res) => {
    const sql = `SELECT * FROM Inscripciones`
    pool.query(sql, (err, results, fields) => {
        if (err) res.json(err)
        res.json(results)
    })
}

const insertInscripcion = (req, res) => {
    const { alumnoID, profesorID, cursoID } = req.body
    const sql = `INSERT Inscripciones(alumnoID, profesorID, cursoID)
                 VALUES(?, ?, ?)`

    let result
    pool.query(sql, [alumnoID, profesorID, cursoID], (err, results, fields) => {
        if (err) res.json(err)
        result = { status: 200, mensaje: "Inscripción agregada correctamente" }
        res.json(result)
    })
}

const deleteInscripciones = (req, res) => {
    const { ids } = req.body
    const sql = `CALL deleteInscripciones(?)`

    pool.query(sql, [ids], (err, results, fields) => {
        if (err) res.json(err)
        res.json({ status: 200, mensaje: `Inscripciones ${ids} borrados correctamente` })
    })
}
const getUsuariosByCurso = (req, res) => {
    const { cursoID } = req.body
    const sql = `SELECT I.id as id,A.nickname as nickname,A.mail as mail
                FROM Inscripciones I
                INNER JOIN Alumnos A
                ON I.alumnoID = A.alumnoID 
                WHERE cursoID = ?`

    pool.query(sql, [cursoID], (err, results, fields) => {
        if (err) res.json(err)
        res.json(results)
    })
}

module.exports = { getInscripciones, insertInscripcion, deleteInscripciones,getUsuariosByCurso }