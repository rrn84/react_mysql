const FILE_PHP ='http://10.22.2.139/0_recursos_web/'
import { Alert } from "react-native"


class API {

    async valLog(user, pass){
        const query =await fetch(`${FILE_PHP}login.php? user=${user} & pass=${pass}`)
        const data = await query.json()
        console.log('Datos :'+ data);
        return data
    }
  
    // async valLog2(user, pass){
    //         const query = await fetch(`${FILE_PHP}login.php? user=${user} & pass=${pass}`, {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 pUser:user,
    //                 pPass:pass
    //             }),

    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }                
    //         }).then((response) => response.json()) 
    //         .then((data) => { 
    //             return data
    //         }).catch((error) => {
    //             console.error(error);
    //         });
    //         return query;
    //     }


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