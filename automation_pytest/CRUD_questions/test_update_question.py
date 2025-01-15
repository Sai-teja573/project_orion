import requests as rq
import random
import config
import utils

# Data is fetched from the endpoint.
endpoint =  config.endpoint

# For updating we need to first create question
# Then update question
# Then get question and verify
def test_update_question():
    q_id = utils.create_question_id()
    payload_for_update = utils.generated_payload
    update_question_response = rq.put(config.update_question_url + f"/{q_id}", json = payload_for_update)
    assert update_question_response.status_code == 200
    get_question_response = rq.get(config.get_question_url + f"/{q_id}")
    updated_data = get_question_response.json()
    assert updated_data["title"] == payload_for_update["title"]
    
