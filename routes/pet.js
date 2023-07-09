const router = require('express').Router()
const{
    getAllPet, 
    getPetById,
    createPet,
    deletePetById,
    updatePetById,
} = require('../controllers/pet')

// GET / get all Pets
router.get('/', getAllPet)


// GET /:id get pet by id
router.get('/:id', getPetById)

// POST / create pet
router.post('/', createPet)

// PUT /:id update pet by id
router.put('/:id', updatePetById)

// DELETE /:id delete pet by id
router.delete('/:id', deletePetById)


module.exports = router
