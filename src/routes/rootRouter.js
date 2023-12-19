import express from "express"
import magicalCreaturesRouter from "./magicalCreaturesRouter.js"

const rootRouter = new express.Router()

// localhost:3000/
rootRouter.get("/", (req, res) => {
  // root route
  // res.send("hello!")
  res.render("welcome")
})

rootRouter.use("/magical-creatures", magicalCreaturesRouter)

export default rootRouter
