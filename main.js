const userLeft = false;
const userWatchingCatMeme = false;


function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name:'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme){
        errorCallback({
            name: "User watching Cat Meme",
            message: "webDevSimplified < Cat"
        })
    } else {
        callback('Thumbs up and subscribe')
    }
}


watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(message.name +" " + error.message)
})

console.log("-----------------------------------------------")


function watchTutorialCallbackPromise(){
   return new Promise((resolve, reject) => {
    if(userLeft){
        reject({
            name:'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme){
        reject({
            name: "User watching Cat Meme",
            message: "webDevSimplified < Cat"
        })
    } else {
        resolve('Thumbs up and subscribe')
    }
   })
    
}

watchTutorialCallbackPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(message.name +" " + error.message)
})

console.log("=------------------------------------------------------")
let p = new Promise((resolve, reject) => {
    let a = 1+4;
    if (a == 2){
        resolve('sucess');
    } else {
        reject('failed');
    }

});


p.then((message)=>{
    console.log("This is in the the " + message)
}).catch(message =>{
    console.log("This is in the catch " + message)
})