/**
 * @param {number} n
 * @returns {number}
 */
function double(n) {
  return n * 2;
}

console.log(double(4));

/**
 * @typedef {object} Ticket
 * @property {number} id
 * @property {string} title
 * @property {string} [assignee]
 */

/**
 * @param {Ticket} t
 * @returns {string}
 */
function describe(t) {
  return `${t.title}: ${t.assignee ?? "-"}`;
}

console.log(describe({ id: 1, title: "Login" }));
