import { Answer } from "../models/answer"
import { GetQuestions, Question } from "../models/question"

export const PROBLEMSDATA : GetQuestions =     
{
    "content": [
        {
            "questionId": 1,
            "title": "What is the atomic number of Hydrogen?",
            "description": "Choose the correct answer.",
            "author": "Kushidhar",
            "status": "ACTIVE",
            "subject": "CHEMISTRY",
            "difficulty": "EASY",
            "options": [
                {
                    "optionId": 1,
                    "text": "1"
                },
                {
                    "optionId": 2,
                    "text": "2"
                },
                {
                    "optionId": 3,
                    "text": "3"
                },
                {
                    "optionId": 4,
                    "text": "4"
                }
            ],
            "tagList": [
                {
                    "tagId": 3,
                    "text": "atomic_number"
                },
                {
                    "tagId": 2,
                    "text": "hydrogen"
                },
                {
                    "tagId": 1,
                    "text": "periodic_table"
                }
            ],
            "correctOptionId": null
        },
        {
            "questionId": 2,
            "title": "What is the atomic number of Helium?",
            "description": "Choose the correct answer.",
            "author": "Murali Taran",
            "status": "ACTIVE",
            "subject": "CHEMISTRY",
            "difficulty": "EASY",
            "options": [
                {
                    "optionId": 1,
                    "text": "1"
                },
                {
                    "optionId": 2,
                    "text": "2"
                },
                {
                    "optionId": 3,
                    "text": "3"
                },
                {
                    "optionId": 4,
                    "text": "4"
                }
            ],
            "tagList": [
                {
                    "tagId": 3,
                    "text": "atomic_number"
                },
                {
                    "tagId": 2,
                    "text": "helium"
                },
                {
                    "tagId": 1,
                    "text": "periodic_table"
                }
            ],
            "correctOptionId": null
        }
    ],
    "pageNumber": 0,
    "pageSize": 2,
    "totalElements": 2,
    "totalPages": 1,
    "lastPage": true
}

export const PROBLEM : Question = {
    "questionId": 1,
    "title": "What is the atomic number of Hydrogen?",
    "description": "Choose the correct answer.",
    "author": "Kushidhar",
    "status": "ACTIVE",
    "subject": "CHEMISTRY",
    "difficulty": "EASY",
    "options": [
        {
            "optionId": 1,
            "text": "1"
        },
        {
            "optionId": 2,
            "text": "2"
        },
        {
            "optionId": 3,
            "text": "3"
        },
        {
            "optionId": 4,
            "text": "4"
        }
    ],
    "tagList": [
        {
            "tagId": 3,
            "text": "atomic_number"
        },
        {
            "tagId": 2,
            "text": "hydrogen"
        },
        {
            "tagId": 1,
            "text": "periodic_table"
        }
    ],
    "correctOptionId": null
}

export const ANSWER : Answer= {
    "questionId": 1,
    "correctOptionId": 1
}