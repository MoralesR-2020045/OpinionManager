import Category from "../category/category.models.js"
import User from "../user/user.models.js"
import Publication from "../publication/publication.model.js"
import Comment from "../comment/comment.model.js"

export const emailExists = async (email = "") => {
    const existe = await User.findOne({ email })
    if (existe) {
        throw new Error(`The email ${email} is already registered`)
    }
}

export const usernameExists = async (username = "") => {
    const existe = await User.findOne({ username })
    if (existe) {
        throw new Error(`The username ${username} is already registered`)
    }
}

export const nameCategoryExists = async (name = "") => {
    const exists = await Category.findOne({ name })
    if (exists) {
        throw new Error(`The category name exists ${name}`)
    }
}

export const categoryExist = async (uid = "") => {
    const exists = await Category.findById(uid)
    if (!exists) {
        throw new Error(`The uid has not been found`)
    }
}

export const publicationExist = async (uid = "") => {
    const exists = await Publication.findById(uid)
    if (!exists) {
        throw new Error("Publication does not exist")
    }
}


export const commentExist = async (uid = "") => {
    const exists = await Comment.findById(uid)
    if (!exists) {
        throw new Error("Comment does not exist")
    }
}