import { makeAutoObservable } from "mobx";
import { MenuOption } from "@/Types";

export class Storage {

    selectedMenuOption: MenuOption | undefined;

    constructor() {
        //this.selectedMenuOption = 'Video';
        makeAutoObservable(this);
    }

    setSelectedMenuOption(selectedMenuOption: MenuOption) {
        this.selectedMenuOption = selectedMenuOption;
    }
}