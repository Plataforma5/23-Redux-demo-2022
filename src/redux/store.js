import { configureStore } from "@reduxjs/toolkit";

import reducer from "./counter";

export default configureStore({ reducer });
