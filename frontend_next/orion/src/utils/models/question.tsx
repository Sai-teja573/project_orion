import { Difficulty, SortBy, SortOrder } from "../enums/question"

export const QuestionSTATUS = {
    Active : "ACTIVE", 
    Inactive : "INACTIVE"
}

export type Id = null | number

export type Option = {
    optionId : Id
    text : string
}

export type Tag = {
    tagId : Id
    text : string
}

export type Question = {
    questionId : Id
    title : string,
    description : string,
    subject : string,
    difficulty : string,
    status : string,
    author : string,
    options : Option[],
    tagList : Tag[],
    correctOptionId : Id
}

export type QuestionPageNSort = {
    pageNumber ?: number,
    pageSize ?: number,
    sortBy ?: string,
    sortOrder ?: string
}

export type QuestionFilters = {
    tagsList ?: Tag[],
    difficulty ?: Difficulty,
    search ?: string
}

export type GetQuestions = {
    content : Question[],
    pageNumber : number,
    pageSize : number,
    totalElements : number,
    totalPages : number,
    lastPage : boolean
}

export type GetQuestionsError = {
    message : "fetching problems failed"
}