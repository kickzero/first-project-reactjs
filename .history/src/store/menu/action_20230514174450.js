import { mappingMenuData } from "../../helper";
import menuService from "../../service/menu";


// action type
export const ATC_GET_MENU = 'ATC_GET_MENU';

// action create
export function actGetMenus(menus) {
  return {
    type: ATC_GET_MENU,
    payload: {
      menus,
    },
  }
}


export function actGetMenusAsync() {
  return async (dispatch) => {

    const response = await menuService.getAll({});
    console.log("response.data", response.data)
    const menus = response.data.items.map(mappingMenuData);
    
    dispatch(actGetMenus(menus));


  }
}


