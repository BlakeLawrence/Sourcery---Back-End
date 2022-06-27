import express from "express";
const router = express.Router();
import {
  getAllResources,
  addToResources,
  patchResources,
} from "../models/resources.js";

/* Get Route - gets all  resources. */
router.get("/", async function (req, res) {
  const result = await getAllResources();
  console.log(result, "get request");
  res.json(result);
});

/* Post Route - Adds a row to resources table */
router.post("/", async function (req, res) {
  const resource = req.body;
  console.log(resource, "resource posted");
  const data = await addToResources(resource);
  res.json({ success: true, payload: data });
});

// Delete route - Deletes a resource from table
router.delete("/:id", async function (req, res) {
  let resourceId = req.params.id;
  let response = await deleteResource(resourceId);
  const data = await response.json();
  res.send("resource deleted");
});

// P;atch Route - updates likes
router.patch("/", async function (req, res) {
  const resource = req.body;
  console.log(resource, "resource updated");
  const data = await patchResources(resource);
  res.json({ success: true, payload: data });
});

export default router;
