import {PRELOADER} from "../../constants";

export const preloader = (bool) => ({
  type: PRELOADER,
  bool
});
