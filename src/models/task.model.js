import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatuses, TaskStatusEnum } from "../utils/constants.js";

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            default: true,
        },
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        assignedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
        },
        status: {
            type: String,
            enum: AvailableTaskStatuses,
            default: TaskStatusEnum.TODO,
        },
        attachments: {
            type: [
                {
                    url: String,
                    mimeType: String,
                    size: Number,
                }
            ],
            default: []
        }
    },
    {
        timestamps: true,
    }
)

export const Task = mongoose.model("Task", taskSchema);