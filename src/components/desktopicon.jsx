"use client";

import Draggable from "./Window-system/draggable";
import IsMobile from "./ismobile";
import Folder from "./folder";

export default function DesktopIcon({
  id,
  startX,
  startY,
  label,
  icon,
  image,
  previewImages,
  onOpen,
}) {
  return (
    <IsMobile
      mobile={
        <Folder
          label={label}
          icon={icon}
          image={image}
          previewImages={previewImages}
          onOpen={onOpen}
        />
      }
      desktop={
        <Draggable id={id} startX={startX} startY={startY}>
          <Folder
            label={label}
            icon={icon}
            image={image}
            previewImages={previewImages}
            onOpen={onOpen}
          />
        </Draggable>
      }
    />
  );
}
