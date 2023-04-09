from flask import jsonify, request, make_response, current_app, Blueprint
from langchain.chains.summarize import load_summarize_chain
from langchain.chat_models import ChatOpenAI
from langchain.schema import (
    HumanMessage,
    SystemMessage
)

from ..models import Transcription, Summary
from .. import db


llm = Blueprint('llm', __name__)


@llm.route('/summarize', methods=['POST'])
def summarize():
    transcription_id = request.json['transcription_id']
    
    transcription = Transcription.query.filter_by(uuid=transcription_id).first()
    
    transcription_content = transcription.transcription
    
    chat = ChatOpenAI(temperature=0)
    messages = [
        SystemMessage(
            content="You are a helpful assistant that is able to generate detailed notes in bullet point format from a transcript."),
        HumanMessage(
            content=f"Generate notes from this transcript: {transcription_content}")
    ]

    result = chat(messages)
        
    summary = Summary(transcription_id=transcription.id, summary=result.content)
    db.session.add(summary)
    db.session.commit()
    
    return make_response(jsonify({'summary': summary.summary}), 200)
