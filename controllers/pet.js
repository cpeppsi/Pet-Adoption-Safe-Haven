const Pet = require("../models/Pet");

async function getAllPet(req, res) {
  try {
    const pet = await Pet.find();
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet:", error);
    res.json({ message: "error fetching pet" });
  }
}

async function getPetById(req, res) {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet by id:", error);
    res.json({ message: "error fetching pet" });
  }
}

async function createPet(req, res) {
  console.log(req.body);
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    console.error("Error creating pet:", error);
    res.status(500).json({ error: "Failed to create pet" });
  }
}

async function updatePetById(req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    if (!req.body.image) req.body.image = undefined;
    await Pet.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "pet updated" });
  } catch (error) {
    console.log("error updating pet:", error);
    res.json({ message: "error updating pet" });
  }
}

async function deletePetById(req, res) {
  try {
    const { id } = req.params;
    await Pet.findByIdAndDelete(id);
    res.status(204).json({ message: "pet deleted" });
  } catch (error) {
    console.log("error deleting pet:", error);
    res.json({ message: "error deleting pet" });
  }
}

module.exports = {
  getAllPet,
  getPetById,
  createPet,
  deletePetById,
  updatePetById,
};

