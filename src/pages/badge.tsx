import React, { useState } from "react";
import { Button, Badge, BadgePosition, IconCheckmark } from "@caisy/league";

export default function BadgeDemo() {
  const [badgeValue, setBadgeValue] = useState(0);

  return (
    <div
      style={{
        margin: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      <Badge value={badgeValue.toString()} position={BadgePosition.TopRight}>
        <Button type="secondary" onClick={() => setBadgeValue(badgeValue + 1)}>
          <IconCheckmark />
          Increase badge value
        </Button>
      </Badge>
      <Badge value={badgeValue.toString()} position={BadgePosition.TopRight}>
        <h3> Increase badge value</h3>
      </Badge>
      <Badge value="10" position={BadgePosition.TopLeft} backgroundColor="#086468">
        <Button type="secondary">
          <IconCheckmark />
          Normal button
        </Button>
      </Badge>
      <Badge value="112" position={BadgePosition.TopLeft} backgroundColor="white" color="#086468">
        <Button type="secondary">
          <IconCheckmark />
          Normal button
        </Button>
      </Badge>
    </div>
  );
}
