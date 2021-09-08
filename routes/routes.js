//rutas
const { Router } = require('express');
const router = Router();
const BD = require('../config/config.js');

router.get('/', async(req, res) => {
    res.json('API funcionando');
});

//GET
router.get('/getUsers', async(req, res, next) => {
    try {

        sql = "select * from users";

        let result = await BD.Open(sql, [], false);

        Users = [];
        result.rows.map(user => {
            let userSchema = {
                "id": user[0],
                "username": user[1],
                "firstname": user[2],
                "lastname": user[3],
                "email": user[4],
                "pass": user[5],
                "birthdate": user[6],
                "country": user[7]
            }
            Users.push(userSchema);
        })
        res.json(Users);
        next();
    } catch (error) {
        console.log(error);
        next();
    }
});

//POST
router.post('/addUser', async(req, res) => {
    try {
        const { id, user_name, first_name, first_lastname, email, password, birth_date, country_code } = req.body;

        sql = "insert into users values (:id,:user_name,:first_name,:first_lastname,:email,:password,:birth_date,:country_code)";

        await BD.Open(sql, [id, user_name, first_name, first_lastname, email, password, birth_date, country_code], true);

        res.json(`Usuario agregado.`);
    } catch (error) {
        console.log(error);
    }
});

//PUT
router.put('/updateUser', async(req, res) => {
    try {
        const { id, user_name, first_name, first_lastname, email, password, birth_date, country_code } = req.body;
        console.log(id, user_name, first_name, first_lastname, email, password, birth_date, country_code);

        sql = "update users set user_name=:user_name, first_name=:first_name, first_lastname=:first_lastname, email=:email, password=:password, birth_date=:birth_date, country_code=:country_code where id=:id";

        await BD.Open(sql, [id, user_name, first_name, first_lastname, email, password, birth_date, country_code], true);

        res.status(200).json({
            "id": id,
            "username": user_name,
            "firstname": first_name,
            "lastname": first_lastname,
            "email": email,
            "pass": password,
            "birthdate": birth_date,
            "country": country_code
        })
    } catch (error) {
        console.log(error);
    }
});

//DELETE
router.delete("/deleteUser/:id", async(req, res) => {
    const { id } = req.params;

    sql = "delete from users where id=:id";

    await BD.Open(sql, [id], true);

    res.json(`Usuario ${id} eliminado`);
});

module.exports = router