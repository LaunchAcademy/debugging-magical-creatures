import express from "express"
import magicalCreaturesRouter from "./magicalCreaturesRouter.js"

const rootRouter = new express.Router()

// GET "/"
rootRouter.get("/", (req, res) => {
  // root route
  res.render("home")
})

rootRouter.use("/magical-creatures", magicalCreaturesRouter)

export default rootRouter
