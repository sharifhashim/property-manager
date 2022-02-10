module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users;",
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUnits = () => {
    const query = {
      text: "SELECT * FROM units;",
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getContracts = () => {
    const query = {
      text: "SELECT * FROM contracts;",
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const login = (email, password) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1;`,
    };
    const values = [email];
    return db
      .query(query, values)
      .then((result) => result.rows[0])
      .then((result) => {
        if (result !== undefined && result.password === password) {
          return result;
        }
        return null;
      })
      .catch((err) => err);
  };
  return { getUsers, getUnits, getContracts, login };
};
