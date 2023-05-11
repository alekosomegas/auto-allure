async function createOrder() {
    let url = "https://api.rentsyst.com/v1/order/create?vehicle_id=13857&pickup_location=2907&return_location=2907&dates=2023-06-27%2000%3A00%20-%202020-06-28%2023%3A59"
    let headers = new Headers({
        "accept" : "application/json",
        "authorization" : process.env.REACT_APP_KEY,
    })

    let request = new Request(url, {
        method: "POST",
        headers: headers
    })

    let results
    
    const res = await fetch(request)
    results = await res.json()
    .catch(e => console.log(e))

    return results
}

export default async function handler(req, res) {
    // let results = await createOrder()
    var formdata = new FormData();
    formdata.append("vehicle_id", "13857");
    formdata.append("dates", "2023-05-20 12:00:00 - 2023-05-25 12:00:00");
    formdata.append("pickup_location", "2907");
    formdata.append("return_location", "2907");

    let headers = new Headers({
        "accept" : "application/json",
        "authorization" : process.env.REACT_APP_KEY,
    })

    var requestOptions = {
    method: 'POST',
    body: formdata,
    headers: headers,
    redirect: 'follow'
    };

    fetch("https://api.rentsyst.com/v1/order/create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    res.status(200).send("ok")
}