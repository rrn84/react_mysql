const FILE_PHP ='http://10.22.2.139/0_recursos_web/'
import { Alert } from "react-native"


class API {

    async loginData2(user, pass){
        const query =await fetch(`${FILE_PHP}login.php? user=${user} & pass=${pass}`)
        const data = await query.json()
        console.log('Datos :'+ data)
        return data
    }

    loginData(user, pass){
        return fetch (`${FILE_PHP}login.php`,{
            method:'POST',
               header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
             body:JSON.stringify({
                 pUser:user,
                 pPass:pass
             })  

        }).then((res) =>res.text())
        .catch(error => console.error('Error :',error))
        .then(response => response.status);
    }


 
    registerData(email, user, pass){
        return fetch (`${FILE_PHP}register.php`,{
            method:'POST',
            body:JSON.stringify({
                pEmail:email,
                pUser:user,
                pPass:pass
            }),
            header:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .catch(error => console.error('Error :',error))
        .then(response => response.status);
    }
}
export default new API()