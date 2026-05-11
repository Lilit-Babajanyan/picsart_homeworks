new Promise((_, reject) => reject("Server Error"))
    .then(res => console.log(res))
    .catch(err => console.log("error:", err))

    