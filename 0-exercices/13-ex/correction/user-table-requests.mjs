export const create = () => {
  return `
    CREATE TABLE IF NOT EXISTS user
      (
        "ID" INTEGER PRIMARY KEY,
        "lastname" VARCHAR(70),
        "firstname" VARCHAR(70),
        "email" VARCHAR(50),
        "password" VARCHAR(72),
        "age" SMALLINT,
        "country" VARCHAR(100),
        "city" VARCHAR(100),
        CONSTRAINT uk_email UNIQUE(email)
      )`
}

export const isTableExist = () => {
  return `
    SELECT * 
    FROM sqlite_master
    WHERE name="user" AND type="table"`
}

export const select = () => {
  return `
    SELECT "email", "password"
    FROM user
    WHERE email=? AND password=?`
}

export const isUserExist = () => {
  return `
    SELECT
      lastname,
      firstname,
      email,
      age,
      country,
      city
    FROM user
    WHERE email = ?
  `
}

export const insert = () => {
  return `
    INSERT INTO user(
      lastname,
      firstname,
      email,
      password,
      age,
      country,
      city
    )
    VALUES (?,?,?,?,?,?,?)`
}

export const requests = {
  create,
  isTableExist,
  select,
  isUserExist,
  insert
}
