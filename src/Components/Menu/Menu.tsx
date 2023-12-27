import React from 'react'
import { MdAudiotrack, MdAnimation  } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { TbTextSize, TbFilters } from "react-icons/tb";
import { IoShapes } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";
import { Storage } from "@/Storage/Storage";
import { StorageContext } from "@/Storage/Index";
import { observer } from 'mobx-react';

const MENU_OPTIONS = [
  {
    id: 1,
    icon: PiVideoBold ,
    action: (store: Storage) => {
      store.setSelectedMenuOption("Video");
    },
  },
  {
    id: 2,
    icon: MdAudiotrack ,
    action: (store: Storage) => {
      store.setSelectedMenuOption("Audio");
    },
  },
  {
    id: 3,
    icon: BiSolidImage,
    action: (store: Storage) => {
      store.setSelectedMenuOption("Image");
    },
  },
  {
    id: 4,
    icon: TbTextSize,
    action: (store: Storage) => {
      store.setSelectedMenuOption("Text");
    },
  },
  {
    id: 5,
    icon: IoShapes ,
    action: (store: Storage) => {
      store.setSelectedMenuOption("Shapes");
    },
  },
  {
    id: 6,
    icon: MdAnimation ,
    action: (store: Storage) => {
      store.setSelectedMenuOption("Animation");
    },
  },
  {
    id: 7,
    icon: TbFilters,
    action: (store: Storage) => {
      store.setSelectedMenuOption("Filters");
    },
  },
];

export const Menu = observer(() => {
  const storage = React.useContext(StorageContext);
  
  return (
    <div>
      {MENU_OPTIONS.map((option) => {
        return (
          <button
            key={option.id}
            onClick={() => option.action(storage)}
            className="py-4 px-2 my-8 w-full flex flex-col items-center text-md"
          >
            <option.icon
              className=""
              size="36"
              color={
                storage.selectedMenuOption === option.icon ? "#EA2127" : "gray"
              }
            />
          </button>
        );
      })}
    </div>
  )
})
