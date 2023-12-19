import express from "express"

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js"

const magicalCreaturesRouter = new express.Router()

// GET localhost:3000/magical-creatures
magicalCreaturesRouter.get("/", (req, res) => {
  console.log(req.params)
  // console.log("magical creatures:", creatures)
  // 1. define the magical creatures route
  // 2. BEFORE HANDLING ANY DATA - get a view template rendering on the page with static HTML
  // debugger
  res.render("index", { arrayOfCreatures: creatures })
})

// GET localhost:3000/magical-creatures/dragon
// GET localhost:3000/magical-creatures/unicorn
magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  const nameOfCreatureFromParams = req.params.creatureName
  console.log(nameOfCreatureFromParams)
  console.log(req.params)

  // we need to get the specific magical creature object from above params
  let foundCreature;
  creatures.forEach((creature) => {
    if (creature.name === nameOfCreatureFromParams) {
      foundCreature = creature
    }
  })
  console.log(foundCreature)

  res.render("show", { creatureToShow: foundCreature })
})

export default magicalCreaturesRouter
