export type ChattingRoomInfoRequestPayload = {
  chattingRoomId: string;
};

export type ChattingRoomInfoResponsePayload = {
  imgpath: string;
  link: string | null;
  title: string;
  maxCount: number;
  chatUser: string[];
  enddate: null;
  id: number;
  state: string;
  place: string;
  addr: string;
  category: string;
  dealHistory: null;
  user: null;
  createDate: Date;
};

export type PreviousChattingItemRequest = {
  chattingRoomId: string;
  userId: string;
};

export type PreviousChattingItemResponse = {
  user_id?: number;
  id?: number;
  idx?: number;
  chatMain_id: number;
  regDate?: string;
  sender?: number;
  contents: string;
  type: string;
};

export type PreviousChattingListResponse = {
  messages: PreviousChattingItemResponse[];
};

export type UserId = {
  userId: string;
};

type QuickChatting = {
  msg: string;
  idx: number;
};

export type QuickChattingListResponse = {
  quickChat: QuickChatting[];
  user_id: string;
};

export type CurrentChatUser = {
  user_id: string;
  idx: number;
  remittanceState: 'N' | 'Y';
};

export type CurrentChatUserListResponse = { users: CurrentChatUser[] };
