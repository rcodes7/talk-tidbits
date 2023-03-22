from flask import jsonify, request, make_response
from . import api
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

    
    return make_response(jsonify({'transcript': result['text']}), 200)