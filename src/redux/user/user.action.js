import { UserActionTypes } from "./user.types"


export const setCurentUser = user =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})