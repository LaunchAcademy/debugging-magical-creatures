import express from "express"

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js"

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get("/", (req, res) => {
  // 1. define the magical creatures route
  // 2. BEFORE ANY DATA - is to get a view template rendering on the page with static HTML
  // debugger
  const creaturesArray = creatures
  res.render("magicalCreatures", {
    creaturesData: creaturesArray,
    moreStuffs: "hi!"
  })
  // in view template, access data via key - creaturesData
})

// creatures.forEach((creature, index) => {

// })

// creatures.forEach(creature, index => {

// })

magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  // which creatureName?
  // debugger
  const nameOfCreature = req.params.creatureName

  let foundCreature
  creatures.forEach((creature) => {
    // look through `creatures` array to find the creature object whose name matches
    if (creature.name === nameOfCreature) {
      foundCreature = creature
    }
  })

  res.render("show", { creature: foundCreature })
})

export default magicalCreaturesRouter
