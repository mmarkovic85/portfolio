/*
 * Application API test file 
 */
import request from "supertest";
import info from "../fixtures/info";

const app = require("../../src/server/app");

test("Should send api info", async () => {
  const response = await request(app)
    .get("/api/info")
    .expect(200);

  expect(response.body).toEqual(info);
});
