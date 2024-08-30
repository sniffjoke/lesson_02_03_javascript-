import fetch from 'node-fetch'

// const pr = fetch('https://google.com')
//
// pr.then((data) => {
//     console.log('data from Google: ' , data.url)
// })

// fetch('https://googlejdkfsjalkfejwla.com')
//     .then((data) => {
//         console.log('data from google: ', data.url)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// fetch('https://yahoo.com').then((data) => {
//     console.log('data from yahoo: ' , data.url)
//     return fetch('https://google.com')
// }).then((data) => {
//     console.log('data from google: ', data.url)
//     return fetch('https://bingsak.com')
// }).then((data) => {
//     console.log('data from bing: ' , data.url)
// }).catch(err => {
//     console.log(err)
// })

// --------------------------------------------------------------------------- //

// console.log('start')

const foo = async () => {
    const dataFromYahoo = await fetch('https://yahoo.com')
    console.log('data from yahoo: ', dataFromYahoo.url)
    const dataFromBing = await fetch('https://bing.com')
    console.log('data from yahoo: ', dataFromBing.url)
    const dataFromGoogle = await fetch('https://google.com')
    console.log('data from yahoo: ', dataFromGoogle.url)
}

foo()

// console.log('end')
