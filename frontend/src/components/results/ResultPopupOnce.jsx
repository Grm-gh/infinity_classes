import { useState } from "react";
import PopupOnce from "../common/A4PopupOnce.jsx";
import ResultHorizontalCards from "./ResultBoardMini.jsx";

export default function ResultPopupOnce() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <PopupOnce onClose={() => setOpen(false)}>
      <ResultHorizontalCards />
    </PopupOnce>
  );
}
