/* simulating an asynchronous API call that retuens a promise */

function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from the API');
    }, 2000);
  });
}

export default getResponseFromAPI;
