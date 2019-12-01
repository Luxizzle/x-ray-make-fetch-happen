const fetch = require('make-fetch-happen');

const makeDriver = opts => {
  const driverFetch = fetch.defaults(opts);

  return (ctx, cb) => {
    driverFetch(ctx.url, { headers: ctx.headers })
      .then(res => res.text())
      .then(body => cb(null, body))
      .catch(err => cb(err, null));
  };
};

module.exports = makeDriver;
