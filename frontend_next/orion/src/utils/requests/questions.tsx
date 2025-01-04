import { AxiosResponse } from 'axios'

import { GetQuestions, Id, Question, QuestionFilters, QuestionPageNSort } from "@/utils/models/question"
import { useRequest } from "../hooks/general/useRequest"

export function AdminQuestions() {
    const {get, post, put, remove} = useRequest()

    async function createQuestion(body : Question) : Promise<AxiosResponse<Question>>{
        return await post('api/admin/questions', body)
    }

    async function updateQuestion(questionId: Id, body : Question) : Promise<AxiosResponse<Question>>{
        return await put('admin/question/'+questionId, body)
    }

    async function deleteQuestion(questionId: Id) : Promise<AxiosResponse<Question>>{
        return await remove('admin/question/'+questionId)
    }

    async function getQuestions(params : QuestionPageNSort, filters : QuestionFilters) : Promise<AxiosResponse<GetQuestions>>{
        return await post('public/questions', filters, { params : params })
    }

    async function getQuestionById(questionId : Id) : Promise<AxiosResponse<Question>>{
        return await get('public/question/'+questionId)
    }

    return {
        createQuestion,
        updateQuestion,
        deleteQuestion,
        getQuestions,
        getQuestionById
    }
} 