const FILE_PHP ='http://10.22.2.139/0_recursos_web/'
import { Alert } from "react-native"


class API {
       async valLog(user, pass){
        const query =await fetch(`${FILE_PHP}login.php? user=${user} & pass=${pass}`)
        const data =await query.json()
        return data
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