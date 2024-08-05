import { z } from "zod";

export const signupinput=z.object({
    email:z.string().email(),
    password:z.string().min(6,"Password must be six char"),
    name:z.string().optional()
})

export type SignUpInput=z.infer<typeof signupinput>