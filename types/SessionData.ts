import type { OauthResponse } from '~/types/OauthResponse';

export interface SessionData {
  userinfo?: OauthResponse; // `userinfo` 속성이 없을 수도 있으므로 `?` 추가
}
