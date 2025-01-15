import requests as rq
import random
import config
import utils

# Data is fetched from the endpoint.
endpoint =  config.endpoint
    
def test_delete_question():
    q_id = utils.create_question_id()
    delete_question_response = rq.delete(config.delete_question_url + f"/{q_id}")
    assert delete_question_response.status_code == 200