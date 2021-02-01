import { SidebarType } from "./entities";

const initialState = {
    friends: [
        {
            id: 1,
            name: "Sveta",
            logo:
                "https://c0.klipartz.com/pngpicture/795/938/gratis-png-cerdo-blanco-grande-caras-divertidas-de-dibujos-animados-s.png"
        },
        {
            id: 2,
            name: "Anna",
            logo:
                "https://w7.pngwing.com/pngs/2/519/png-transparent-little-penguin-bird-face-funny-cartoon-faces-s-face-smiley-bird.png"
        },
        {
            id: 3,
            name: "Dima",
            logo: "https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png"
        }
    ]
};

export const sidebarReducer = (state: SidebarType = initialState, action: any) => {
    return state;
};
