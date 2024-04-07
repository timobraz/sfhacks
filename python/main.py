from ultralytics import YOLO
from pydantic import BaseModel
from PIL import Image
import numpy as np
import cv2

# Load the image and model
# image = Image.open("image.png")
model = YOLO("yolov8m-seg.pt")


class Item(BaseModel):
    img: str = None


# Make a prediction
def generate_prediction(image):
    results = model.predict(image, show=False, save=False)

    # Convert the image to a numpy array and BGR color for OpenCV
    image_np = np.array(image.convert("RGB"))[:, :, ::-1].copy()

    # Convert results to list
    labels = results[0].names
    classified = [int(x) for x in results[0].boxes.cpu().cls.tolist()]
    results = results[0].boxes.cpu().xywh.tolist()
    class1_total = 0
    class2_total = 0
    class3_total = 0
    # Draw each detection on the image
    for i, result in enumerate(results):
        color_map = {
            1: (255, 0, 0),  # Red
            2: (0, 255, 0),  # Green
            3: (0, 0, 255),  # Blue
            4: (255, 100, 0),  # Red
            5: (0, 255, 100),  # Green
            6: (100, 0, 255),  # Blue
            # Add more colors for more classes
        }
        color = color_map[classified[i]]
        x_center, y_center, width, height = [int(x) for x in result]
        x1 = x_center - (width // 2)
        y1 = y_center - (height // 2)
        x2 = x1 + width
        y2 = y1 + height
        if classified[i] == 1:
            class1_total += 1
        elif classified[i] == 2:
            class2_total += 1
        elif classified[i] == 3:
            class3_total += 1
        cv2.rectangle(
            image_np,
            (x1, y1),
            (x2, y2),
            color,
            3,
        )
    image = cv2.rotate(image_np, cv2.ROTATE_90_CLOCKWISE)
    print(results)
    totals_added = class1_total * 1000 + class2_total * 200 + class3_total * 150
    cv2.imwrite("output.jpg", image)
    return {
        "points": totals_added,
        "class1": class1_total,
        "class2": class2_total,
        "class3": class3_total,
    }


# Display the image

# basic fastapi server
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.responses import StreamingResponse
from io import BytesIO
import base64

app = FastAPI(debug=True)

# Add CORS middleware


@app.post("/image")
async def read_image(body: Item):
    print("request")
    im = Image.open(BytesIO(base64.b64decode(body.img)))
    resp = generate_prediction(im)
    return resp


@app.get("/")
async def read_root():
    return {"Hello": "World"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        port=5000,
        log_level="info",
        reload=True,
        workers=1,
    )
