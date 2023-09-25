import express from "express"

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js"

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get("/", (req, res) => {
  // 1. define the magical creatures route
  // 2. BEFORE HANDLING ANY DATA - get a view template rendering on the page with static HTML
  // debugger
})

export default magicalCreaturesRouter
