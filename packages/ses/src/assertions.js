/**
 * throwTantrum()
 * We'd like to abandon, but we can't, so just scream and break a lot of
 * stuff. However, since we aren't really aborting the process, be careful to
 * not throw an Error object which could be captured by child-Realm code and
 * used to access the (too-powerful) primal-realm Error object.
 */
export function throwTantrum(message, err = undefined) {
  const msg = `please report internal shim error: ${message}`;

  // we want to log these 'should never happen' things.
  console.error(msg);
  if (err) {
    console.error(`${err}`);
    console.error(`${err.stack}`);
  }

  // eslint-disable-next-line no-debugger
  debugger;
  throw TypeError(msg);
}

/**
 * assert()
 */
export function assert(condition, message) {
  if (!condition) {
    throwTantrum(message);
  }
}
