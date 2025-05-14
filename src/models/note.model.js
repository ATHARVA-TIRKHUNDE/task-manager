import mongoose from "mongoose"

const noteSchema = new mongoose.Schema(
    {
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            require: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
        content: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Note = mongoose.model("Note", noteSchema);
