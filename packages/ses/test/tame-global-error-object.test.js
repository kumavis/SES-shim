import tap from 'tap';
import { captureGlobals } from '@agoric/test262-runner';
import tameGlobalErrorObject from '../src/tame-global-error-object.js';

const { test } = tap;

test('tameGlobalErrorObject', t => {
  t.plan(3);

  const restore = captureGlobals('Error');

  tameGlobalErrorObject();

  t.equal(Error.captureStackTrace, undefined);
  t.equal(Error.stackTraceLimit, undefined);

  const error = new Error();
  t.equal(error.stack, undefined);

  restore();
});
