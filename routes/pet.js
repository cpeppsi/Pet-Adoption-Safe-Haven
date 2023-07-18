const router = require("express").Router();
const {
  getAllPet,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
} = require("../controllers/Pet");
const Pet = require("../models/Pet");

// GET /pets get all Pets
router.get("/", getAllPet);

// GET /pets/:id get Pet by id
router.get("/:id", getPetById);

// POST /pets create Pet
router.post("/", createPet);

// PUT /pets/:id update Pet by id
router.put("/:id", updatePetById);

// DELETE /pets/:id delete Pet by id
router.delete("/:id", deletePetById);


// Seed database
router.get("/data/seed", async (req, res) => {
  try {
    const data = [
      {
        image:
          "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/cat-placeholder.svg",
        name: "Siobhan",
        type: "Cat",
        gender: "Female",
        breed: "Tuxedo",
        age: "2 years",
        adoptionStatus: "Ready to Adopt",
        introduction: "I need ALL your Tuna please.",
        details: "Loves tuna treats, laser pointers, and summoning otherworldly forces",
      },
      {
        image:
          "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/dog-placeholder.svg",
        name: "Boe",
        type: "Dog",
        gender: "Male",
        breed: "Mastiff mix",
        age: "3 years",
        adoptionStatus: "Ready to Adopt",
        introduction: "I need ALL your Cuddles please.",
        details: "Loves cuddles and fortune-telling. Up for any adventure!",
      },
      {
        image:
          "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/dog-placeholder.svg",
        name: "Captain",
        type: "Dog",
        gender: "Male",
        breed: "Lab mix",
        age: "7 years",
        adoptionStatus: "Ready to Adopt",
        introduction: "I will fetch ALL the things!",
        details: "Just vibin'. Will fetch anything. Ball. Shoes. Thor's Hammer.",
      },
      {
        image:
          "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/cat-placeholder.svg",
        name: "Tofu",
        type: "Cat",
        gender: "Female",
        breed: "Calico",
        age: "2 years",
        adoptionStatus: "Ready to Adopt",
        introduction: "Perfect for the Night Owl.",
        details: "Sleep all day! Party all night!",
      },
      {
        image:
          "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/dog-placeholder.svg",
        name: "Jim-Jam",
        type: "Dog",
        gender: "Male",
        breed: "Heeler mix",
        age: "10 years",
        adoptionStatus: "Ready to Adopt",
        introduction: "Age is only a number right?.",
        details: "Nothing slows me down in my old age!",
      },
    ];

    const savedPets = await Pet.insertMany(data);
    res.status(201).json(savedPets);
  } catch (error) {
    console.error("Error seeding database:", error);
    res.status(500).json({ error: "Failed to seed database" });
  }
});

module.exports = router

