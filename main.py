from ultralytics import YOLO

from PIL import Image
import numpy as np
import cv2

# Load the image and model
image = Image.open("image.png")
model = YOLO("yolov8m-seg.pt")

# Make a prediction
results = model.predict(image, imgsz=(512, 512), show=False, save=False)

# Convert the image to a numpy array and BGR color for OpenCV
image_np = np.array(image.convert("RGB"))[:, :, ::-1].copy()

# Convert results to list
labels = results[0].names
classified = [int(x) for x in results[0].boxes.cpu().cls.tolist()]
results = results[0].boxes.cpu().xywh.tolist()

# Draw each detection on the image
for i, result in enumerate(results):
    color_map = {
        1: (255, 0, 0),  # Red
        2: (0, 255, 0),  # Green
        3: (0, 0, 255),  # Blue
        4: (255, 100, 0),  # Red
        5: (0, 255, 200),  # Green
        6: (200, 0, 255),  # Blue
        # Add more colors for more classes
    }
    color = color_map[classified[i]]
    x_center, y_center, width, height = [int(x) for x in result]
    x1 = x_center - (width // 2)
    y1 = y_center - (height // 2)
    x2 = x1 + width
    y2 = y1 + height

    cv2.rectangle(
        image_np,
        (x1, y1),
        (x2, y2),
        color,
        3,
    )
print(results)
# Display the image
cv2.imshow("Prediction", image_np)
cv2.waitKey(0)


# # BIODEGRADBALE

# import yolov5

# # load model
# model = yolov5.load("keremberke/yolov5n-garbage")
# # set model parameters
# model.conf = 0.5  # NMS confidence threshold
# model.iou = 0.5  # NMS IoU threshold
# model.agnostic = False  # NMS class-agnostic
# model.multi_label = False  # NMS multiple labels per box
# model.max_det = 1000  # maximum number of detections per image

# # set image
# img = "pizza.JPG"

# # perform inference
# results = model(img, size=640)

# # inference with test time augmentation
# results = model(img, augment=True)

# # parse results
# predictions = results.pred[0]
# boxes = predictions[:, :4]  # x1, y1, x2, y2
# scores = predictions[:, 4]
# categories = predictions[:, 5]

# # show detection bounding boxes on image
# results.show()

# # save results into "results/" folder
# results.save(save_dir="results/")

# pickkle
# import pickle
# import matplotlib.pyplot as plt
# import matplotlib.patches as patches
# from PIL import Image

# # Load the bounding boxes from the pickle file
# with open("result-resnet50.pkl", "rb") as f:
#     boxes = pickle.load(f)

# # Load the image
# image = Image.open("image.png")
# fig, ax = plt.subplots(1)

# # Display the image
# ax.imshow(image)

# # Draw each bounding box
# for box in boxes:
#     x1, y1, x2, y2 = box
#     rect = patches.Rectangle(
#         (x1, y1), x2 - x1, y2 - y1, linewidth=1, edgecolor="r", facecolor="none"
#     )
#     ax.add_patch(rect)

# # Show the figure
# plt.show()

# import pickle

# # Load the saved model
# loaded_model = pickle.load(open("result-resnet50.pkl", "rb"))

# # Make predictions
# predictions = loaded_model.predict([[1, 2, 3]])

# # Print the predictions
# print(predictions)
