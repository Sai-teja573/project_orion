import requests as rq
import random

endpoint = "http://localhost:8080"

def create_question():
    # For creating a question dynamically
    random_num = random.random()
    payload = {
        "title": f"Who is panda{random_num}",
        "description": "Choose the correct answer.",
        "subject": "CHEMISTRY",
        "difficulty": "MEDIUM",
        "status": "ACTIVE",
        "author": "Kushidhar",
        "options": [
            {
                "text": "1"
            },
            {
                "text": "2"
            },
            {
                "text": "3"
            },
            {
                "text": "4"
            }
        ],
        "tagList": [
            {
                "text": "human"
            },
            {
                "text": "jio"
            }
        ],
        "correctOptionId": 1
    }
    create_question_response = rq.post(endpoint + "/api/admin/questions", json =payload)
    assert create_question_response.status_code == 201
    question_data = create_question_response.json()
    question_id = question_data["questionId"]
    return question_id

def test_get_question():
    q_id = create_question()
    get_question_response = rq.get(endpoint + f"/api/public/question/{q_id}")
    assert get_question_response.status_code == 200