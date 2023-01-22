const postData= async (url, data)=>{
    const res = await fetch(url,{
         method: "POST",
         body: data,
         headers:{
             'Content-type': 'application/json; charset=utf-8'
         }
     });

     return await res.json();
 }


 export {postData};