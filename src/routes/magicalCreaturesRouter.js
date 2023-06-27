import express from "express"

import creatures from "../creatures.js"

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get("/", (req, res) => {
  // console.log("router", creatures)
  res.render("index", { allCreatures: creatures })
})

magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  // console.log(req.params)
  const nameFromParams = req.params.creatureName

  let foundCreature = {}
  creatures.forEach((creature) => {
    if (creature.name === nameFromParams) {
      foundCreature = creature
    }
  })
  // console.log(foundCreature)
  // res.send("working on show")
  res.render("show", { creature: foundCreature })
})

export default magicalCreaturesRouter
