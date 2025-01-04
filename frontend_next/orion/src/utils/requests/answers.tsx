import { AxiosResponse } from 'axios'

import { Id } from "@/utils/models/question"
import { useRequest } from "../hooks/general/useRequest"
import { Answer } from '../models/answer'

export function AdminQuestions() {
    const {get, post} = useRequest()

    async function validateAnswer(questionId : Id, body : Answer) {
        return await post('admin/validate/answer/'+questionId, body)
    }

    async function getAnswer(questionId : Id) : Promise<AxiosResponse<Answer>>{
        return await get('public/answer/'+questionId)
    }

    return {
        validateAnswer,
        getAnswer
    }
} 