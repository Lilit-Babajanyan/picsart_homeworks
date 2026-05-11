function getUser() {
  return new Promise((resolve) => {
    resolve({ name: "Lilit" });
  });
}

function getPosts(user) {
    console.log(user);
    return new Promise((resolve) =>{
    setTimeout(() => { resolve("hi, how are you")}, 2000)});
    }

function getComments(post) {
    console.log(post);
    return new Promise ((resolve) => { setTimeout(() => {resolve("fine, thank you")}), 2000})
}

getUser()
  .then(getPosts)
  .then(getComments)
  .then(result => setTimeout(() => console.log(result), 2000));