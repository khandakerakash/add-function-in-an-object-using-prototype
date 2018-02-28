'use strict'

// Using Promise
const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest('Akash')

// Using async / await
const make2Request = async () => {
  console.log(await get2JSON())
  return "done"
}

make2Request('Kh')