/**
 * view에서 사용하는 모든 메시지에 대해 정의 한다.
 */
export default {
  route: {
    undefined: '알수없음',
    example: '샘플',
    dashboard: '대시보드',
    adminUser: '관리자'
  },
  tagsView: {
    refresh: '새로고침',
    close: '닫기',
    closeOthers: '기타 닫기',
    closeAll: '모두 닫기'
  },
  login: {
    title: 'Winikim Admin Starter Kit',
    logIn: '로그인',
    username: '아아디',
    password: '패스워드',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  success: {
    name: '성공',
    admin: {
      user: {
        create: '관리자가 추가 되었습니다.',
        delete: '관리자가 삭제 되었습니다.'
      }
    }
  },
  error: {
    admin: {
      user: {
        fetchList: '관리자 목록 조회가 실패하였습니다.',
        add: '관리자 추가에 실패하였습니다.',
        delete: '관리자 삭제가 실패하였습니다.'
      }
    },
    name: '실패',
    validation: {
      require: '필수로 입력해 주세요.',
      password: '8자리 이상 특수문자 1자리이상 영문 2자리 이상 입력해 주세요.',
      emptyUsername: '아이디를 입력하여 주세요.'
    },
    form: '입력 값들을 확인해 주세요',
    signIn: '아이디와 비밀번호를 확인해 주세요'
  },
  title: {
    admin: {
      user: '관리자'
    }
  },
  label: {
    username: '아이디',
    delete: '삭제',
    admin: {
      user: {
        create: '관리자 추가'
      }
    }
  },
  button: {
    signIn: '로그인'
  },
  placeholder: {
    username: '아이디를 입력하여 주세요.',
    password: '비밀번호를 입력하여 주세요.'
  }
}
