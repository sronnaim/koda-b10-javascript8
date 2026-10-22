const queue = [
  { name: "John", waitTimeMs: 1500 },
  { name: "Ed", waitTimeMs: 2000 },
  { name: "Jane", waitTimeMs: 500 },
];

function serveOne(p) {
  return new Promise((resolve, reject) => {
    if (typeof p.name !== "string" || !p.name) {
      reject("Invalid name");
      return;
    }

    console.log("Serving ", p.name);

    setTimeout(() => {
      resolve(p);
    }, p.waitTimeMs);
  });
}

function serve(queue) {
  return queue.reduce((prevPromise, p) => {
    return prevPromise.then(() => {
      return serveOne(p)
        .then((served) => console.log(`${served.name} is served!`))
        .catch((why) => console.log(why));
    });
  }, Promise.resolve());
}

console.time("Queue");
serve(queue).then(() => console.timeEnd("Queue"));
