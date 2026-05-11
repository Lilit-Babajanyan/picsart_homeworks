function execute() {
   let id =  setTimeout(() => {
        console.log("execute")
    }, 5000);

    setTimeout(() => clearTimeout(id), 2000);
}
execute();