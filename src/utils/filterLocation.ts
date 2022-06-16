export function filterLocation(
  location: 'Y' | 'N' | '',
  address: string,
): string {
  if (location === 'N') {
    return '지원하지 않는 위치입니다. 아파트나 공동주택을 입력해주세요 😥';
  } else if (location === 'Y' || address) {
    return address;
  } else if (!address) {
    return '현재 위치를 입력해서 채팅방을 확인해보세요 ✨';
  }
}

export function filterLocationInSearchPage(
  address: string,
  accessToken: string,
) {
  if (address) return `현재 위치는 ${address} 입니다.`;
  else if (!accessToken && !address) {
    return '로그인 후 이용가능합니다.';
  } else if (accessToken && !address) {
    return '홈 탭에서 현재 위치를 설정해보세요.';
  }
}
