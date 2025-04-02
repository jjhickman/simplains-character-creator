from fastapi import FastAPI, Request
from fastapi.responses import Response
from uuid import uuid4
from character_messages_pb2 import Character, GetCharacterRequest, GetCharacterResponse
from character_messages_pb2 import SetCharacterRequest, SetCharacterResponse


app = FastAPI()

@app.post("/character")
async def create_character(request: Request):
    """..."""
    body = await request.body()
    character_request = SetCharacterRequest()
    character_request.ParseFromString(body)

    user_id = character_request.user_id
    character = character_request.character
    created_id = uuid4()

    # Put in database

    # Process the message
    print(f"Created new character {created_id}: {character.name}")

    # Create a response message
    response_message = SetCharacterResponse(id={created_id})
    return Response(content=response_message.SerializeToString(), media_type="application/x-protobuf")