import { MouseEventHandler } from "react";

export default interface Action {
    title: string,
    clickAction: MouseEventHandler<HTMLButtonElement>
}