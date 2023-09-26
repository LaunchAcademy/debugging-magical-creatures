import express from "express"

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js"

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get("/", (req, res) => {
  // 1. define the magical creatures route
  // 2. BEFORE HANDLING ANY DATA - get a view template rendering on the page with static HTML
  // debugger
  // console.log(creatures);
  res.render("index", { creaturesArray: creatures })
})

magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  // console.log(req.params.creatureName)
  const nameOfCreatureFromParams = req.params.creatureName
  // console.log(nameOfCreatureFromParams)

  // let foundCreature
  // creatures.forEach((creature) => {
  //   // console.log("creature:", creature)
  //   // console.log(nameOfCreatureFromParams === creature.name)
  //   if (nameOfCreatureFromParams === creature.name) {
  //     foundCreature = creature
  //   }
  // })

  const foundCreature = creatures.find((creature) => {
    if (nameOfCreatureFromParams === creature.name) {
      return creature
    }
  })

  if (foundCreature) {
    res.render("show", { creatureObject: foundCreature })
  } else {
    res.render("show", { message: "not a valid creature!" })
  }
})

export default magicalCreaturesRouter
