function downloadFile(){
    return new Promise((resolve) => 
        setTimeout(() => { resolve("file is downloaded")}, 2000))
}

function resizeImage(message){
    console.log(message);
    return new Promise((resolve) => 
        setTimeout(() => { resolve("file is resized")}, 2000))
}

function uploadFile(message2){
    console.log(message2);
    return new Promise((resolve) => setTimeout(() => { resolve("file is uploaded")}, 2000))
}

downloadFile()
.then(resizeImage)
.then(uploadFile)
.then((res) => console.log(res))