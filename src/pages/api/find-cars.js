
async function getCars(start, end) {
  let url = "https://api.rentsyst.com/v1/booking/search?pickup_location=2907&return_location=2907&dates=" + start + "%2010%3A00%20-%20" +end+ "%2010%3A00"
  let headers = new Headers({
    "accept" : "application/json",
    "authorization" : "Bearer dda155569b7f9d534ff55df967458a7c6d32a22d"
  }) 

  let request = new Request(url, {
    method: "GET",
    headers: headers
  })

  let results

  const res = await fetch(request)
  results = await res.json()
  .catch(error => console.error(error))

  return results
}

export default async function handler(req, res) {

  let start = req.body.startDate
  let end = req.body.endDate

  let results = await getCars(start, end)

  res.status(200).send( results )
}
