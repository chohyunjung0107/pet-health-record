// 스토어의 설정 파일 : 리덕스, 리덕스 thunk(미들웨어) 를 사용하기 위해서
import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members/membersSlice.js";
import recordsSlice from "./records/recordsSlice";
import ReduxThunk from "redux-thunk";

export default configureStore({
	reducer: {
		members: membersReducer,
		records: recordsSlice,
	},
	//Redux Thunk 등록
	middleware: [ReduxThunk],
});
