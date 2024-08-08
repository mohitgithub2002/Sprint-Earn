export {default} from "next-auth/middleware"

export const config = {
    matcher: ["/home", "/payment"]
}

//Note: Mention all protected page routes in the matcher array.