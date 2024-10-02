export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve(true);
    } else {
      reject(new Error('false'));
    }
  });
  return promise;
}
