/**
 * Promise: Unresolved/ Pending
 * 'resolved' > then
 * 'rejected' > catch
 */

function promises1() {
   /** */
   promise = new Promise((resolve, reject) => {
      reject();
   });

   promise
      .then(() => console.log("finally finished!"))
      .then(() => console.log("i was also ran!!!"))
      .catch(() => console.log("uh oh!!"));
}

function promisesPractical() {
   url = "https://jsonplaceholder.typicode.com/posts/";

   //fetch(url).then(response => response.json());
   fetch(url)
      .then(response => console.log(response))
      .catch(error => console.log("BAD", error));
}
