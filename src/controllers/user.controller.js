import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Sreya ! we are my first person and I really love you"
    })
})


export { registerUser }