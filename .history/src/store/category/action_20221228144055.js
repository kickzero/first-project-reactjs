import { mappingPostData } from "../../helper";
import categoryService from "../../service/category";

// action type
export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES';

//action creator
export function actFetchAllCategories(categories) {
  return {
    type: ACT_FETCH_ALL_CATEGORIES,
    payload: {
      categories,
    }
  }
}

//snake_case
// action async
export function actFetchAllCategoriesAsync(){
  return async (dispatch) => {
    const response = await categoryService.getAll();
    const data = response.data;
    const categories = data;
    dispatch(actFetchAllCategories(categories));
  }
}

