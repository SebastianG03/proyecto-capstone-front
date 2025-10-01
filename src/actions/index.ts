import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    myAction: defineAction({
        input: z.object({
            name: z.string(),
            age: z.number().min(0).optional(),
        }),
        handler: async ( input ) => {
            // Your action logic here
            return { message: `Hello, ${input.name}!` };
        },
    })
}