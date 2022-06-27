import pool from "../db/connection.js";

//Gets all resources
export async function getAllResources() {
  const result = await pool.query(`SELECT * FROM resources;`);

  return result;
}

//Add to resources table
export async function addToResources(obj) {
  const result = await pool.query(
    `INSERT INTO resources (name, url, description, likes, week) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [obj.name, obj.url, obj.description, obj.likes, obj.week]
  );
  console.log(result.rows);
  return result.rows;
}

//Delete a resource from table
export async function deleteResource(id) {
  const result = await pool.query(`DELETE FROM resources WHERE id = $1;`, [id]);
  return result;
}

// update likes
export async function patchResources(obj) {
  await pool.query(`UPDATE resources SET likes = $1 WHERE id = $2`, [
    obj.likes,
    obj.id,
  ]);
}
