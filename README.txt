PARA PODER UTILIZAR LA BD EN SU PC:

1. abra con visual studio code
2. abra una terminar integrada (Ctrl+Alt+O) digite el comando "npm i oracledb" y espere que termine de instalar
3. vaya a sqlDeveloper, Oracle conexiones y de clic derecho, propiedades en su base de datos donde tenga almacenada la info de stonks
    tenga en cuenta usuario, contraseña, nombre del host y SID
4. vaya a config>config.js y reemplace la información de 
    cred = {
    user: '<su usuario>',
    password: '<su contraseña>',
    connectString: `<nombre del host>/<SID>`
5. utilice el comando "npm run dev" para iniciar el programa y vaya a su navegador -> localhost:3000/
    localhost:3000/getUsers -> Muestra todos los usuarios
    localhost:3000/addUser -> Agrega un usuario (requiere enviar unas credenciales para funcionar, utilice postman o la interfaz para enviar)
    localhost:3000/updateUser -> Actualiza un usuario (requiere enviar unas credenciales para funcionar, utilice postman o la interfaz para enviar) NO ACTUALIZA
    localhost:3000/deleteUser/<id> -> Elimina un usuario con id = <id>
    
