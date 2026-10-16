const queue = [
  { name: 'John', waitTimeMs: 1500 },
  { name: 'Ed', waitTimeMs: 2000 },
  { name: 'Jane', waitTimeMs: 500 },
  { name: '', waitTimeMs: 1000 },
];

function serveOne(p) {
  return new Promise((resolve, reject) => {
    if (typeof p.name !== 'string' || !p.name) {
      reject('Invalid name');
      return;
    }

    console.log('Serving ', p.name);

    setTimeout(() => {
      resolve(p);
    }, p.waitTimeMs);
  });
}

function serve(queue) {
  queue.forEach((p) => {
    serveOne(p)
      .then((p) => console.log(`${p.name} is served!`))
      .catch((why) => console.log(why));
  });
}

serve(queue);
