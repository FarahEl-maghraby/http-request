// Making Http request
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6601f97918d96f7bd99e99940bca01b3&query=26.8206,30.8025'

// request({url}, (error,response)=>{
//    //console.log(response)
//   // console.log(response.body)

//    // error bec. data is in Json format --> console.log(response.body.location.name)

//    // Parsing 
//    const data = JSON.parse(response.body)
//    console.log(data.location.name)
// })

/////////////////////////////////////////////////////////////////////////////////////////

// Parsing using json:true

// request({url , json:true}, (error,response)=>{
//     console.log(response)
//     console.log(response.body.location.country)
//  })

/////////////////////////////////////////////////////////////////////////////////

// Error handling
request({url , json:true}, (error,response)=>{
   if(error){
       console.log('Error has occurred')
   }
   else if(response.body.error){
    console.log('Unable to find location')
   }
   else{
    console.log(response.body.location.country)
   }
 })