import {from, Subject, timer} from "rxjs";
import {canvas, CELL_SIZE} from "./draw";
import {map} from "rxjs/operators";


export const computerMove$ = new Subject();


export const simulateComputerTurn = (validateCell) => {
    const remdons = Math.floor(Math.random() * validateCell.length);
    timer(500).subscribe(() => computerMove$.next(validateCell[remdons]));
}
