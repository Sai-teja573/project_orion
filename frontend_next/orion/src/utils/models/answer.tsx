import { Id } from "./question"

export const ANSWERSTATUS = {
    Correct : "CORRECT",
    Incorrect : "INCORRECT"
}

export type Answer = {
    questionId : Id,
    correctOptionId : Id
}