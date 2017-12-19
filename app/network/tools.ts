/**
 * Given a predicate and a function that returns a promise (an action),
 * call the action while the predicate evaluates to true, and return a
 * promise that resolves whenever the predicate returns false. This is
 * effectively a while loop using promises. You will likely need to call
 * this inside a function that provides access to some sort of in-scope
 * state.
 *
 * @param  {()   => boolean} predicate - continue loop while this is true
 * @param  {()   => Promise} action - the body of the loop to evaluate
 * @return {Promise}
 */
export function promiseWhile<T>(
    predicate: () => boolean,
    action: () => Promise<T>
): Promise<T> {
    function loop(): Promise<any> {
        if (!predicate()) {
            return Promise.resolve();
        }
        return Promise.resolve(action()).then(loop);
    }
    return Promise.resolve().then(loop);
}
