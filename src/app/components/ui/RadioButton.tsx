"use client";
import { MdNightsStay } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { darkMode } from "../../../../src/app/book/store/index.js";
import { useDispatch, useSelector } from "react-redux";

export function RadioButton() {
  const darkSelector = useSelector((state: any) => state.dark.dark);
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(darkMode.dark());
  };
  return (
    <button onClick={handelClick}>
      {darkSelector ? <MdSunny /> : <MdNightsStay />}
    </button>
  );
}
