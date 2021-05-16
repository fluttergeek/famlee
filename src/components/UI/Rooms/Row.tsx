import React, { FC, MouseEventHandler } from "react";
import ActionSVG from "./ActionSVG";
import TextDataCell from "./TextDataCell";
import TextDataCellLeft from "./TextDataCellLeft";

interface Row {
  room: number;
  capacity: number;
  duration: number;
  price: number;
  people: number;
  description: string;
  guestID: string;
  occupancy: boolean;
  index: number;
  onEdit: MouseEventHandler<HTMLButtonElement>;
}

const trLight = "border-b border-gray-200 bg-white hover:bg-gray-100";
const trDark = "border-b border-gray-200 bg-gray-50 hover:bg-gray-100";

const paddingPurple =
  "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs";
const paddingGreen =
  "bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
  minimumFractionDigits: 2,
});

const Row: FC<Row> = ({
  index,
  room,
  duration,
  price,
  people,
  description,
  occupancy,
  guestID,
  capacity,
  onEdit
}) => {
  return (
    <tr className={index % 2 == 0 ? trLight : trDark} key={index}>
      {/* Room Number */}
      <TextDataCellLeft>{room}</TextDataCellLeft>
      {/* Description */}
      <TextDataCellLeft>{description}</TextDataCellLeft>
      {/* Price */}
      <TextDataCell>{price}</TextDataCell>
      {/* Occupancy */}
      <td className="py-3 px-6 text-center">
        <span className={occupancy ? paddingPurple : paddingGreen}>
          {occupancy ? "Occupied" : "Vacant"}
        </span>
      </td>
      {/* People */}
      <TextDataCell>{people}</TextDataCell>
      {/* Capacity */}
      <TextDataCell>{capacity}</TextDataCell>
      {/* Price */}
      <TextDataCell>{formatter.format(price)}</TextDataCell>
      {/* Duration */}
      <TextDataCell>{duration}</TextDataCell>
      {/* Actions */}
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <ActionSVG onClick={onEdit}>
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </>
          </ActionSVG>
          <ActionSVG onClick={onEdit}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </ActionSVG>
          <ActionSVG onClick={onEdit}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </ActionSVG>
        </div>
      </td>
    </tr>
  );
};

export default Row;
