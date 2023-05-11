  // useEffect(() => {
  //   fetch("api/auth", {
  //     method: "GET"
  //   })
  // }, [])
export default async function handler(req, res) {
      var formdata = new FormData();
      formdata.append("client_id", process.env.REACT_APP_CLIENT_ID);
      formdata.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);
      formdata.append("grant_type", "client_credentials");
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("https://api.rentsyst.com/oauth2/token", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    res.status(200).send("ok")
  }