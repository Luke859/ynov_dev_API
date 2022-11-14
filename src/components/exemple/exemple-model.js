import mongoose from "mongoose";

const {Schema} = mongoose;

const exempleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})

const Exemple = mongoose.model('Exemple', exempleSchema)

// Exemple.create({
//     name: 'Test product',
//     description: "fsvijuhvbrijojzpokivjkkjowxhjvijosjhihbvhjishiujogbjnskojjvionbsjhbvhjziuojjhbgvujhjjos",
//     colors: ['blue', 'red', 'purple'],
//     price: 10000
// })

const findAll = async () => {
    const exemples = await Exemple.find()
    console.log('Find all examples ============== : ', exemples)
}

const findById = async () => {
    const exemple = await Exemple.findById('63721a581db4f32a848b4747')
    console.log('Find one example ============== : ', exemple)
}

const updateById = async () => {
    // Method 1
    const exemple = await Exemple.findByIdAndUpdate(
        '63721a581db4f32a848b4747', 
        {name: "Luke le boss"},
        {runValidator: true}
    )
    console.log('Update ID ============== : ', exemple)

    // // Method 2
    // const exemple = await Exemple.findById('63721a581db4f32a848b4747')
    // exemple.name = "Modifié"
    // exemple.save()

    // // Method 3
    // const exemple = await Exemple.findById('63721a581db4f32a848b4747')
    // exemple.set({
    //     name: 'Modifié'
    // })
    // exemple.save()
}

const deleteById = async () => {
    // Method 1
    const exemple = await Exemple.findByIdAndDelete('63721a581db4f32a848b4747')
}

// findById()
// findAll()
// updateById()
// deleteById()

export default Exemple