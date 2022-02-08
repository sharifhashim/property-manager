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

  const getBuildings = () => {
    const query = {
      text: "SELECT * FROM buildings;",
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

  return { getUsers, getBuildings, getUnits, getContracts };
};
