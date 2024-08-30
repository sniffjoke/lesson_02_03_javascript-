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

// const foo = async () => {
//     const dataFromYahoo = await fetch('https://yahoo.com')
//     console.log('data from yahoo: ', dataFromYahoo.url)
//     const dataFromBing = await fetch('https://bing.com')
//     console.log('data from yahoo: ', dataFromBing.url)
//     const dataFromGoogle = await fetch('https://google.com')
//     console.log('data from yahoo: ', dataFromGoogle.url)
// }
//
// foo()

// console.log('end')

// const foo = async () => {
//     try {
//         const dataFromYahoo = await fetch('https://yahoo.com')
//         console.log('data from yahoo: ', dataFromYahoo.url)
//         const dataFromBing = await fetch('https://bingdjak.com')
//         console.log('data from yahoo: ', dataFromBing.url)
//         const dataFromGoogle = await fetch('https://google.com')
//         console.log('data from yahoo: ', dataFromGoogle.url)
//     } catch (e) {
//         console.log('ERROR: ', e)
//     }
//     throw new Error()
// }
//
// foo().then(() => {
//     console.log('resolve foo')
// }).catch((err) => {
//     console.log('reject foo')
// })

// --------------------------- all, race, any, allSettled - статические методы класса

// then catch - экземплярные методы класса

// all

// const pr1 = fetch('https://yahoo.com')
// const pr2 = fetch('https://bingfjdks.com')
// const pr3 = fetch('https://google.com')
//
// const bigData =  Promise.all([pr1, pr2, pr3])
//
// bigData.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log('Error: ', err.type)
// })

// race
