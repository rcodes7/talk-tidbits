from flask import jsonify, request, make_response
from uuid import uuid4
from . import api
from .. import db
from ..models import Transcription, Segment
import whisper
import tempfile

@api.route('/transcript/', methods=['POST'])
def generate_transcipt():
    if 'file' not in request.files:
        return make_response(jsonify({'error': 'No file part'}), 400)
    
    _file = request.files['file']
    
    if not _file or not _file.filename:
        return make_response(jsonify({'error': 'No file selected'}), 400)
    
    model = whisper.load_model('base')
    with tempfile.NamedTemporaryFile(delete=True) as temp:
        _file.save(temp.name)
        result = model.transcribe(temp.name)
        transcription = Transcription(file_name=_file.filename, transcription=result['text'], uuid=uuid4().hex)
        db.session.add(transcription)
        db.session.commit()
        for segment in result['segments']:
            db.session.add(Segment(segment=segment['text'], start=segment['start'], end=segment['end'], segment_id=segment['id'], transcription_id=transcription.id))
        db.session.commit()
    
    return make_response(jsonify({'transcript': result['text']}), 200)