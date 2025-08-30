import React from "react";
import "./NoticeBoard.css";

const NoticeBoard = () => {
  // 실제 카운터사이드 공지사항 데이터
  const notices = [
    {
      id: 1,
      title: "8/20(수) 오픈마켓 결제 프로세스 악용 대상자 단속 안내",
      date: "2025-08-20",
      isNew: true,
    },
    {
      id: 2,
      title: "홈페이지 내 지휘모듈 재설정 확률 표기 오류 안내",
      date: "2025-08-19",
      isNew: true,
    },
    {
      id: 3,
      title: "카운터사이드 오리진 2.5주년 Talk:Side 안내",
      date: "2025-08-13",
      isNew: true,
    },
    {
      id: 4,
      title: "잠재/세트옵션 선택권 관련 오류 안내",
      date: "2025-06-12",
      isNew: false,
    },
    {
      id: 5,
      title: "(수정)6/12(목) 앱 업데이트 안내",
      date: "2025-06-12",
      isNew: false,
    },
    {
      id: 6,
      title: "6/11(수) 오픈마켓 결제 프로세스 악용 대상자 단속 안내",
      date: "2025-08-06",
      isNew: false,
    },
  ];

  return (
    <div className="notice-board">
      <h3 className="notice-title">카운터사이드 공지사항</h3>
      <div className="notice-list">
        {notices.map((notice) => (
          <div key={notice.id} className="notice-item">
            <div className="notice-content-wrapper">
              {notice.isNew && <span className="new-badge">N</span>}
              <div className="notice-content">
                <div className="notice-title-text">{notice.title}</div>
                <div className="notice-date">{notice.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn prev">이전</button>
        <div className="page-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <button className="page-btn next">다음</button>
      </div>
    </div>
  );
};

export default NoticeBoard;
