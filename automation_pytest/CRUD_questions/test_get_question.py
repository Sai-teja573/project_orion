import requests as rq
import random
import config
import utils

# Data is fetched from the endpoint.
endpoint =  config.endpoint

def test_get_question():
    q_id = utils.create_question_id()
    get_question_response = rq.get(config.get_question_url + f"/{q_id}")
    assert get_question_response.status_code == 200