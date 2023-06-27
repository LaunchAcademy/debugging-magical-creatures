import express from "express"

import magicalCreaturesRouter from "./magicalCreaturesRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  // root route
  // res.send("hi!")
  res.render("magical-creatures")
})

rootRouter.use("/magical-creatures", magicalCreaturesRouter)

export default rootRouter
