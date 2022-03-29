const showMessageLater = (msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (msg === "Hello") {
                return reject("Error happened")
            }
            return resolve(msg)
        }, 2000)
    })
}

const myFunction = async () => {
    
    try {
        let result = ""
        result = await showMessageLater("hello5")
        console.log(result);
        result = await showMessageLater("hello6")
        console.log(result);
        result = await showMessageLater("hello7")
        console.log(result);
        result = await showMessageLater("Hello")
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

myFunction()