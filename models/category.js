import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    category: { type: String, required: true },
    id:{type: String}
}, {timestamps: true})


// export default mongoose.model("category", categorySchema);
const Category = mongoose.model('Category', categorySchema);
export default Category;